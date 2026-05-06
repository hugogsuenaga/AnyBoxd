var database = require("../database/config");

function getProfileData(idUsuario) {
  var instrucaoSql = `
        SELECT idUsuario, email, username, nome, senha FROM usuario;
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function getProfilePosts(idUsuario) {
  var instrucaoSql = `
    SELECT 
        p.idPost, 
        p.titulo, 
        p.imagem, 
        p.texto, 
        p.nota,
        u.username, 
        (SELECT COUNT(*) FROM curtida WHERE fkPost = p.idPost) AS total_likes,
        (SELECT COUNT(*) FROM curtida WHERE fkPost = p.idPost AND fkUsuario = ${idUsuario}) AS usuario_curtiu,
        (SELECT COUNT(*) FROM comentario WHERE fkPostPai = p.idPost) AS total_comentarios_post,
        (SELECT COUNT(*) FROM comentario WHERE fkPostPai = p.idPost AND fkComentarioPai IS NOT NULL) AS total_comentarios_comentario
    FROM post p
    JOIN usuario u ON p.fkUserPost = u.idUsuario 
    WHERE u.idUsuario = ${idUsuario}
    ORDER BY p.dtPost DESC;
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  getProfileData,
  getProfilePosts,
};

