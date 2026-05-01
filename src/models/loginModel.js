const loginModel = require("./loginModel");

function login(email, senha) {
var instrucaoSql = `
        SELECT idUser, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}