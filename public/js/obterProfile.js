function getProfile() {
  let dados = {
    idUsuario: sessionStorage.ID_USUARIO,
  };

  fetch(`/profile/posts?dados=${dados.idUsuario}`, {
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

  fetch(`/profile/dash?dados=${dados.idUsuario}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (resposta) {
      if (resposta.ok) {
        resposta.json().then(function (dados) {
          console.log("Dados recebidos");
          exibirDash(dados);
        });
      } else {
        console.error("Erro na requisição!");
      }
    })
    .catch(function (erro) {
      console.error("Erro de rede: ", erro);
    });
}