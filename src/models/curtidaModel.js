let database = require("../database/config");

function inserirCurtida(idPost, idUsuarioLogado) {
  
  var instrucaoSql = `
    INSERT INTO curtida VALUES
        (${idPost}, ${idUsuarioLogado});
    `;
  console.log("Executando a instrução SQL: \ninserirCurtida\n");
  return database.executar(instrucaoSql);
}

function removerCurtida(idPost, idUsuarioLogado) {
  console.log(idPost);
  console.log(idUsuarioLogado);
  var instrucaoSql = `
    DELETE FROM curtida WHERE fkPost = ${idPost} AND fkUsuario = ${idUsuarioLogado};;
    `;
  console.log("Executando a instrução SQL: \nremoverCurtida\n");
  return database.executar(instrucaoSql);
}

module.exports = {
  inserirCurtida,
  removerCurtida,
};
