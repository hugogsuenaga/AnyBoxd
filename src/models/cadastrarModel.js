var database = require("../database/config");

function cadastrar(nome, username, email, senha) {
  var instrucaoSql = `
        INSERT INTO usuario (nome, username, email, senha) VALUES ('${nome}', '${username}', '${email}', '${senha}');
    `;
  console.log("Executando a instrução SQL: \ncadastrar\n");
  return database.executar(instrucaoSql);
}

module.exports = {
  cadastrar,
};
