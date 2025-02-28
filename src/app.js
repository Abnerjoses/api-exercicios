import 'dotenv/config'
import express, { json } from 'express'
import cors from 'cors'

import adicionarRotas from './rotas.js'

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

adicionarRotas(servidor);

servidor.listen(process.env.PORTA, () => console.log(`------> a API subiu na porta : ${process.env.PORTA}`));
