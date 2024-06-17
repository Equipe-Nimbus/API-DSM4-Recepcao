import express from "express";
import { config } from 'dotenv';
import routerMedicao from "./routes/MedicaoRotas";
import cors from "cors";


config();
const app = express();
app.use(express.json());


const corsOptions = {
  origin: ['0.0.0.0'],
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));

app.use("/medicao", routerMedicao)

const PORT = 8001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});