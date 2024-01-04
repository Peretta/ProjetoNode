import express, { Request, Response } from 'express';
import mainRoutes from './routes/index';
import painelRoutes from './routes/painel';
import { request } from 'http';


const server = express();

server.use(mainRoutes);
server.use('/painel',painelRoutes);

server.use((req:Request, res:Response)=>{
    res.status(404).send('PÁGINA NÃO ENCONTRADA')
});


server.listen(80);