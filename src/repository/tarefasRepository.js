import con from './connection.js';

export async function inserirTarefa(tarefa){
    const comando = `
        INSERT INTO tb_tarefa (ds_tarefa, nr_ordem, bt_finalizado, dt_cadastro)
               VALUES(?, ? ,? , ?);
   
    `;

    let resposta= await con.query(comando,[tarefa.descricao, tarefa.ordem, tarefa.finalizado,
         tarefa.cadastro]);
        let info = resposta[0];

        return info.insertId;
}


export async function consultarTarefa(){
    const comando = `
        select id_tarefa        id,
               ds_tarefa        descricao,
               nr_ordem         ordem,
               bt_finalizado    finalizado,
               dt_cadastro      cadastro
          from tb_tarefa;
                `;

    let resposta = await  con.query(comando);
    let registro = resposta[0];

    return registro;
}


export async function alterarTarefa(id, tarefa){
    const comando = `
            UPDATE tb_tarefa
               SET ds_tarefa = ?,
                   nr_ordem = ?,
                   bt_finalizado = ?,
                   dt_cadastro = ?
             where id_tarefa = ?;
    `;
    let resposta= await con.query(comando,[tarefa.descricao, tarefa.ordem, tarefa.finalizado,
    tarefa.cadastro, id]);

    let info = resposta[0];

    return info.affectedRows;
}


export async function removerTarefa(id){
    const comando = `
        delete from tb_tarefa
            where id_tarefa = ?;
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}

