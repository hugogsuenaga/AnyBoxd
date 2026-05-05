function obterPostsDoServidor(placeholder) {
  let dados = {
    idUsuario: sessionStorage.ID_USUARIO,
  };

  fetch(`/posts/orderBy${placeholder}?idUsuario=${dados.idUsuario}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (resposta) {
      if (resposta.ok) {
        resposta.json().then(function (dados) {
          console.log("Dados recebidos");

          exibirPosts(dados);
        });
      } else {
        console.error("Erro na requisição!");
      }
    })
    .catch(function (erro) {
      console.error("Erro de rede: ", erro);
    });
}
