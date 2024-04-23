import { Request, Response } from "express";
import GuardaMedicao from "../services/GuardaMedicao";
import EstruturaDados from "../services/EstruturaDados";
import AvisaTratamento from "../services/AvisaTratamento";

class MedicaoController{

    async guardar(req:Request, res:Response) {
        try{
            const medicao = EstruturaDados.estruturar(req)
            await GuardaMedicao.salvar(medicao)
        }catch(error){
            return res.status(400).send(error)
        }
        await AvisaTratamento.avisar()
        res.status(200).send()
    }

}

export default new MedicaoController()