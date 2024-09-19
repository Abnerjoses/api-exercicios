import con from './connection.js';

export async function inserirMusica(musica){
    const comando = `
    INSERT INTO tb_musica (nm_musica, ds_artista, url_musica, dt_lancamento, qtd_visualizacoes, hr_duracao, bt_destaque, ds_idioma) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?);
    `;

    let resposta= await con.query(comando,[musica.nome, musica.artista, musica.url, musica.data, 
        musica.quantidade, musica.duracao, musica.destaque, musica.idioma]);
        let info = resposta[0];

        return info.insertId;
}


export async function consultarMusica(){
    const comando = `
         select id_musica          id,
                nm_musica          nome,
                ds_artista         artista,
                url_musica         url,
                dt_lancamento      dataLancamento,
                qtd_visualizacoes  visualizacoes,
                hr_duracao         duracao,
                bt_destaque        destaque,
                ds_idioma          idioma
           from tb_musica    
                `;

    let resposta = await  con.query(comando);
    let registro = resposta[0];

    return registro;
}


export async function alterarMusica(id, musica){
    const comando = `
            update tb_musica
               set nm_musica = ?,
                   ds_artista = ?,
                   url_musica =  ?,
                   dt_lancamento = ?,
                   qtd_visualizacoes = ?,
                   hr_duracao = ?,
                   bt_destaque = ?,
                   ds_idioma = ?
             where id_musica = ?;
             `;
    let resposta= await con.query(comando,[musica.nome, musica.artista, musica.url, musica.data, 
    musica.quantidade, musica.duracao, musica.destaque, musica.idioma, id]);
    let info= resposta[0];

    return info.affectedRows;
}


export async function removerMusica(id){
    const comando = `
        delete from tb_musica
            where id_musica= ?;
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}

