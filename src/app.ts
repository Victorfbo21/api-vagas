import express, { Request, Response } from 'express'
import { config } from 'dotenv';
import cors from 'cors'
import { Router } from 'express';
import Routes from './routes';


config({
    path: '.env'
})

const app = express();


const route = Router();

app.use(express.json());
app.use(cors());
app.use(Routes)



route.get('/', (req, res) => {
    res.json({ message: 'hello world with Typescript' })
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    next()
})

export default app