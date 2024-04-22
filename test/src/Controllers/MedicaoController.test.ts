import { Request, Response } from "express"
import MockResponse from "../../Mocks/MockResponse"
import MedicaoController from "../../../src/Controllers/MedicaoController"

interface MedicaoMock {
    erro:boolean
}

jest.mock("../../../src/services/GuardaMedicao", ()=>{
    return {
        salvar: jest.fn((medicao:MedicaoMock)=>{
            if(medicao.erro == true)
                throw new Error("ERRO")
            return;
        })
    }
})

jest.mock("../../../src/services/AvisaTratamento", ()=>{
    return {
        avisar: jest.fn()
    }
})

jest.mock("../../../src/services/EstruturaDados", ()=>{
    return {
        estruturar: jest.fn((req:Request)=>{
            let medicao = {erro:true}
            if(req.body.erro == true)
                return medicao
            medicao.erro = false
            return medicao
        })
    }
})

let req = {
    body:{
        erro: true
    }
}

describe("Teste controller de medições", ()=>{

    test("Testando com medicao correta", async()=>{
        const mockRes = (MockResponse.mockRes.status as jest.Mock).mockClear()
        req.body.erro = false
        const response = req as Request
        await MedicaoController.guardar(response, MockResponse.mockRes)
        expect(mockRes.mock.calls[0][0]).toBe(200)
    })

    test("Testando com medicao com erro", async()=>{
        const mockRes = (MockResponse.mockRes.status(400).send as jest.Mock).mockClear()
        req.body.erro = true
        const response = req as Request
        await MedicaoController.guardar(response, MockResponse.mockRes)
        expect(mockRes.mock.calls[0][0].message).toBe("ERRO")
    })

})