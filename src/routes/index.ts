import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req:Request, res:Response)=>{
    res.send("Olá mundo");
});
router.get('/contato', (req:Request, res:Response)=>{
    res.send("Formulário de contato");
});
router.get('/sobre', (req:Request, res:Response)=>{
    res.send("Página institucional");
});

//ROTA DINÂMICA 
    //SIMPLES
router.get('/noticia/:slug', (req:Request, res:Response)=>{
    let slug = req.params.slug;
    res.send(`Notícia: ${slug}`);
});
    //AVANÇANDO
router.get('/voo/:origem-:destino', (req:Request, res:Response)=>{
    let {origem, destino} = req.params;
    res.send(`ORIGEM: ${origem.toUpperCase()}, DESTINO: ${destino.toUpperCase()}`);
});

export default router;