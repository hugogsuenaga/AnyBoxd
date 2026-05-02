var database = require("../database/config");

function time() {
  var instrucaoSql = `
        SELECT idPost, titulo, imagem, texto, nota, u.username FROM post 
			  JOIN usuario u ON fkUserPost = u.idUsuario ORDER BY dtPost DESC;
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  time,
};
