import * as db from '../repository/tarefasRepository.js';

import { Router } from 'express';
const endpoints = Router();


endpoints.get('/tarefas/' , async (req, resp) =>{
    try {
      let registro = await  db.consultarTarefa();
      resp.send(registro);

    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

endpoints.post('/tarefas/' , async (req, resp) =>{
    try {

        let tarefa = req.body;

        let id = await  db.inserirTarefa(tarefa);

      resp.send({
        novoId : id
      })

    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

endpoints.put('/tarefas/:id' , async (req, resp) =>{
    try {

        let id = req.params.id;
        let tarefa = req.body;
        
        let linhasAfetadas = await  db.alterarTarefa(id, tarefa);

        if(linhasAfetadas >= 1){
            resp.send()
        }
        else{
            resp.status(404).send({erro: 'nenhum registro encontrado'})
        }
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

endpoints.delete('/tarefas/:id' , async (req, resp) =>{
    try {
        let id = req.params.id;
        
        let linhasAfetadas = await  db.removerTarefa(id);

        if(linhasAfetadas >= 1){
            resp.send()
        }
        else{
            resp.status(404).send({erro: 'nenhum registro encontrado'});
        }
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

export default endpoints;