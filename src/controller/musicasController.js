import * as db from '../repository/musicasRepository.js';

import { Router } from 'express';
const endpoints = Router();


endpoints.get('/musicas/' , async (req, resp) =>{
    try {
      let registro = await  db.consultarMusica();
      resp.send(registro);

    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

endpoints.post('/musicas/' , async (req, resp) =>{
    try {

        let musica = req.body;

        let id = await  db.inserirMusica(musica);

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

endpoints.put('/musicas/:id' , async (req, resp) =>{
    try {

        let id = req.params.id;
        let musica = req.body;
        
        let linhasAfetadas = await  db.alterarMusica(id, musica);

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

endpoints.delete('/musicas/:id' , async (req, resp) =>{
    try {
        let id = req.params.id;
        
        let linhasAfetadas = await  db.removerMusica(id);

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