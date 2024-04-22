import { Request, Response } from "express";
import GuardaMedicao from "../services/GuardaMedicao";
import EstruturaDados from "../services/EstruturaDados";

class MedicaoController{

    async guardar(req:Request, res:Response) {
        try{
            const medicao = EstruturaDados.estruturar(req)
            await GuardaMedicao.salvar(medicao)
        }catch(error){
            return res.status(400).send(error)
        }
        res.status(200).send()
    }

}

export default new MedicaoController()