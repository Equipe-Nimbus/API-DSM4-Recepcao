import express from "express";
import { config } from 'dotenv';
import routerMedicao from "./routes/MedicaoRotas";

config();
const app = express();
app.use(express.json());

app.use("/medicao", routerMedicao)

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});