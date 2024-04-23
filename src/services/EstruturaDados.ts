import { Request } from "express"
import Medicao from "../interfaces/Medicao"
class EstruturaDados{

    estruturar(req:Request):Medicao{
        if(req.body.uuid == undefined ||
            req.body.unix == undefined ||
            req.body.bateria == undefined)
            throw new Error("Estrutura de dados errada")
        let medicao:Medicao = {
            bateria:req.body.bateria,
            uuid:req.body.uuid,
            unix:req.body.unix,
            medicoes:{}
        }
        for(let chave in req.body){
            if(chave != "bateria" && chave != "uuid" && chave != "unix")
                medicao.medicoes[chave] = req.body[chave]
        }

        return medicao
    }

}

export default new EstruturaDados()