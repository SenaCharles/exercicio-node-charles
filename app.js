import express from "express";
import alunos from "./alunos.js";

const app = express ();
const port = 3000;

app.get("/", (requisicao, resposta)=>{
    resposta.send(alunos)
});

app.listen(3000, () => console.log(`Servidor rodando na porta ${port}`));