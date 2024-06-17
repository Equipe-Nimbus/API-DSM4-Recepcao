import { deflate } from "zlib";
import MongoDB from "../ConfigMongoDB";
import Medicao from "../interfaces/Medicao";

class SalvaMedicao{

    async salvar(medicao:Medicao){
        await MongoDB.connect()
        const colecaoMedicao = MongoDB.db("MedicoesNimbus").collection("MedicoesNimbus");
        await colecaoMedicao.insertOne(medicao)
        await MongoDB.close()
    }

}

export default new SalvaMedicao();