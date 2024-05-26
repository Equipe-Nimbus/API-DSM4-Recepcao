import EstruturaDados from "../../../src/services/EstruturaDados"
import { Request } from "express"

let reqCerto = {
    body:{
        idPlacaEstacao: "2",
        temp: 23.2,
        pluv: 1024,
        unix:1676059,
        bateria: 70
    }
}
let reqErrado = {
    body:{
        temp: 23.2,
        pluv: 1024,
        unix:1676059,
        bateria: 70
    }
}


describe("Teste de Estruturação das medicoes", ()=>{
    test("Medicao na estrutura certa", ()=>{
        let response = reqCerto as Request
        let medicaoEstruturada = EstruturaDados.estruturar(response)
        expect(medicaoEstruturada.idPlacaEstacao).toBe("2")
        expect(medicaoEstruturada.medicoes.temp).toBe(23.2)
        expect(medicaoEstruturada.medicoes.pluv).toBe(1024)
    })
    test("Medicao na estrutura errada", ()=>{
        let response = reqErrado as Request
        try{
            let medicaoEstruturada = EstruturaDados.estruturar(response)
            fail()
        } catch(error){
            const erro = error as Error
            expect(erro.message).toBe("Estrutura de dados errada")
        }        
    })
})