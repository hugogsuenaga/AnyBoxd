var database = require("../database/config");

function login(email, senha) {
  var instrucaoSql = `
        SELECT idUsuario, email, username, nome, senha FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
  console.log("Executando a instrução SQL: \nlogin\n");
  return database.executar(instrucaoSql);
}

module.exports = {
  login,
};
