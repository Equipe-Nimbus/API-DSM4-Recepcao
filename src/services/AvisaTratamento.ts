import axios from "axios";
import { response } from "express";

class AvisaTratamento {

    async avisar() {
        await axios.post("http://tratamento:8002/tratamento/aviso")
            .then(response => console.log(response.data))
            .catch(error => console.log("Erro na requisição: ", error));
    }
}

export default new AvisaTratamento();
