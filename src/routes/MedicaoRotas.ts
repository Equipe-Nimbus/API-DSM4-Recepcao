import { Router } from "express";
import MedicaoController from "../Controllers/MedicaoController";

const routerMedicao = Router()

routerMedicao.post("/guardar", MedicaoController.guardar)

export default routerMedicao