import { Request } from "express"
import Medicao from "../interfaces/Medicao"
class EstruturaDados{

    estruturar(req:Request):Medicao{
        if(req.body.idPlacaEstacao == undefined ||
            req.body.unix == undefined ||
            req.body.bateria == undefined)
            throw new Error("Estrutura de dados errada")
        let medicao:Medicao = {
            bateria: req.body.bateria,
            idPlacaEstacao:req.body.idPlacaEstacao,
            unix:req.body.unix,
            medicoes:{}
        }
        for(let chave in req.body){
            if(chave != "idPlacaEstacao" && chave != "unix" && chave != "bateria")
                medicao.medicoes[chave] = req.body[chave]
        }

        return medicao
    }

}

export default new EstruturaDados()