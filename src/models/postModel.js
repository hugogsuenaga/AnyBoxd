var database = require("../database/config");

function time(idUsuarioLogado) {
  var instrucaoSql = `
   SELECT 
    p.idPost, 
    p.titulo, 
    p.imagem, 
    p.texto, 
    p.nota,
    u.username, 
    (SELECT COUNT(*) FROM curtida WHERE fkPost = p.idPost) AS total_likes,
    (SELECT COUNT(*) FROM curtida WHERE fkPost = p.idPost AND fkUsuario = ${idUsuarioLogado}) AS usuario_curtiu,
    (SELECT COUNT(*) FROM comentario WHERE fkPostPai = p.idPost) AS total_comentarios_post,
    (SELECT COUNT(*) FROM comentario WHERE fkPostPai = p.idPost AND fkComentarioPai IS NOT NULL) AS total_comentarios_comentario
FROM post p
JOIN usuario u ON p.fkUserPost = u.idUsuario 
ORDER BY p.dtPost DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }
  
  function likes(idUsuarioLogado) {
  var instrucaoSql = `
   SELECT 
    p.idPost, 
    p.titulo, 
    p.imagem, 
    p.texto, 
    p.nota,
    u.username, 
    (SELECT COUNT(*) FROM curtida WHERE fkPost = p.idPost) AS total_likes,
    (SELECT COUNT(*) FROM curtida WHERE fkPost = p.idPost AND fkUsuario = ${idUsuarioLogado}) AS usuario_curtiu,
    (SELECT COUNT(*) FROM comentario WHERE fkPostPai = p.idPost) AS total_comentarios_post,
    (SELECT COUNT(*) FROM comentario WHERE fkPostPai = p.idPost AND fkComentarioPai IS NOT NULL) AS total_comentarios_comentario
FROM post p
JOIN usuario u ON p.fkUserPost = u.idUsuario 
ORDER BY p.dtPost DESC;
                      `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  time,
  likes,
};
