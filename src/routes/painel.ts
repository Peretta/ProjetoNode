import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req:Request, res:Response)=>{
    res.send("Olá mundo dos paineis");
});

export default router;