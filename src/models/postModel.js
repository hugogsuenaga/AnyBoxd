var database = require("../database/config");

function time() {
  var instrucaoSql = `
    SELECT 
    p.idPost, 
    p.titulo, 
    p.imagem, 
    p.texto, 
    p.nota,
    u.username, 
    COUNT(DISTINCT cur.fkUsuario, cur.fkPost) AS total_likes,
    COUNT(DISTINCT com.idComentario) AS total_comentarios_post,
    COUNT(DISTINCT com.fkComentarioPai) AS total_comentarios_comentario
FROM post p
LEFT JOIN curtida cur ON p.idPost = cur.fkPost 
LEFT JOIN comentario com ON p.idPost = com.fkPostPai
JOIN usuario u ON p.fkUserPost = u.idUsuario 
GROUP BY p.idPost, u.idUsuario
ORDER BY p.dtPost DESC;
                      `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function likes() {
  var instrucaoSql = `
    SELECT 
    p.idPost, 
    p.titulo, 
    p.imagem, 
    p.texto, 
    p.nota,
    u.username, 
    COUNT(DISTINCT cur.fkUsuario, cur.fkPost) AS total_likes,
    COUNT(DISTINCT com.idComentario) AS total_comentarios_post,
    COUNT(DISTINCT com.fkComentarioPai) AS total_comentarios_comentario
FROM post p
LEFT JOIN curtida cur ON p.idPost = cur.fkPost 
LEFT JOIN comentario com ON p.idPost = com.fkPostPai
JOIN usuario u ON p.fkUserPost = u.idUsuario 
GROUP BY p.idPost, u.idUsuario
ORDER BY total_likes DESC;
                      `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  time,
  likes,
};
