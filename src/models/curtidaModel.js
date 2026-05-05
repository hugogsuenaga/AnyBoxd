function inserirCurtida(idPost, idUsuarioLogado) {
  var instrucaoSql = `
    INSERT INTO curtida VALUES
        (${idPost}, ${idUsuarioLogado});
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function removerCurtida(idPost, idUsuarioLogado) {
  var instrucaoSql = `
    INSERT INTO curtida VALUES
        (${idPost}, ${idUsuarioLogado});
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  inserirCurtida,
  removerCurtida,
};