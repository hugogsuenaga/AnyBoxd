var database = require("../database/config");

function getProfileDash(idUsuario) {
  var instrucaoSql = `
      SELECT 
        u.idUsuario,
        u.username,
        u.email,
        COUNT(DISTINCT p.idPost) AS total_posts,
        ROUND(AVG(p.nota), 1) AS media_notas,
        (SELECT COUNT(*) 
        FROM curtida c 
        JOIN post p2 ON c.fkPost = p2.idPost 
        WHERE p2.fkUserPost = u.idUsuario) AS total_curtidas_recebidas,
        (SELECT COUNT(*) 
        FROM comentario com 
        JOIN post p3 ON com.fkPostPai = p3.idPost 
        WHERE p3.fkUserPost = u.idUsuario) AS total_comentarios_recebidos,
        (SELECT p4.titulo 
        FROM post p4
        LEFT JOIN curtida c2 ON p4.idPost = c2.fkPost
        WHERE p4.fkUserPost = u.idUsuario
        GROUP BY p4.idPost
        ORDER BY COUNT(c2.fkPost) DESC, p4.dtPost DESC
        LIMIT 1) AS post_destaque
        FROM usuario u
        LEFT JOIN post p ON u.idUsuario = p.fkUserPost
        WHERE u.idUsuario = ${idUsuario}
        GROUP BY u.idUsuario;
    `;
  console.log("Executando a instrução SQL: \ngetProfileDash\n");
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
  console.log("Executando a instrução SQL: \ngetProfilePosts\n");
  return database.executar(instrucaoSql);
}

function getProfileGraph(idUsuario) {
  var instrucaoSql = `
      SELECT 
        COUNT(c.fkPost) AS total_likes
        FROM post p
        LEFT JOIN curtida c ON p.idPost = c.fkPost
        WHERE p.fkUserPost = ${idUsuario}
        GROUP BY p.idPost, p.dtPost
        ORDER BY p.dtPost DESC
        LIMIT 10;
    `;
  console.log("Executando a instrução SQL: \ngetProfileGraph\n");
  return database.executar(instrucaoSql);
}

module.exports = {
  getProfileDash,
  getProfilePosts,
  getProfileGraph,
};

