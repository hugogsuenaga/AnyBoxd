const { getComentario } = require("../controllers/post");
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
  console.log("Executando a instrução SQL: \ntime\n");
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
ORDER BY total_likes DESC;
                      `;
  console.log("Executando a instrução SQL: \nlikes\n");
  return database.executar(instrucaoSql);
}

function getComentarios(idUsuarioLogado, idPost) {
  var instrucaoSql = `
   SELECT 
    p.idPost, 
    p.titulo, 
    p.imagem, 
    p.texto AS texto_post, 
    p.nota, 
    p.fkUserPost,
    u_autor.username AS autor_post,
    c.texto AS texto_comentario,
    u_coment.username AS autor_comentario,
    (SELECT COUNT(*) FROM curtida WHERE fkPost = p.idPost) AS total_likes,
    (SELECT COUNT(*) FROM curtida WHERE fkPost = p.idPost AND fkUsuario = ${idUsuarioLogado}) AS usuario_curtiu
FROM post p
JOIN usuario u_autor ON p.fkUserPost = u_autor.idUsuario
LEFT JOIN comentario c ON p.idPost = c.fkPostPai
LEFT JOIN usuario u_coment ON c.fkUserComentario = u_coment.idUsuario
WHERE p.idPost = ${idPost}
ORDER BY c.idComentario ASC;
                      `;
  console.log("Executando a instrução SQL: \ngetComentario\n");
  return database.executar(instrucaoSql);
}

function getComentarioComentario(idPost) {
  var instrucaoSql = `
  select u.username, c.texto from comentario c
  join usuario u on c.fkUserComentario = u.idUsuario
  where fkPostPai = ${idPost};
  `;

  console.log("Executando a instrução SQL: \ngetComentario\n");
  return database.executar(instrucaoSql);
}

function insertPost(idUsuario, titulo, imagem, texto, nota) {
  var instrucaoSql = `
   INSERT INTO post (titulo, imagem, texto, nota, fkUserPost) VALUES
    ('${titulo}', '${imagem}', '${texto}', ${nota}, ${idUsuario}); 
                      `;
  console.log("Executando a instrução SQL: \insertPost\n");
  return database.executar(instrucaoSql);
}

function insertComentario(idUsuario, idPost, texto) {
  var instrucaoSql = `
   INSERT INTO comentario (texto, fkUserComentario, fkPostPai) VALUES
    ('${texto}', ${idUsuario}, ${idPost}); 
                      `;
  console.log("Executando a instrução SQL: \insertComentario\n");
  return database.executar(instrucaoSql);
}

module.exports = {
  time,
  likes,
  insertPost,
  getComentarios,
  insertComentario,
};
