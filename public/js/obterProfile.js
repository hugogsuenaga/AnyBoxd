let graphDadosVar = []

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
          console.log("Dados recebidos: profile/posts");
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
          console.log("Dados recebidos: profile/dash");
          exibirDash(dados);
        });
      } else {
        console.error("Erro na requisição!");
      }
    })
    .catch(function (erro) {
      console.error("Erro de rede: ", erro);
    });

  fetch(`/profile/graph?dados=${dados.idUsuario}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (resposta) {
      if (resposta.ok) {
        resposta.json().then(function (dados) {
          console.log("Dados recebidos: profile/dados");
          console.log(dados)
          for (let i = 0; i < dados.length; i++) {
            let dado = dados[i].total_likes
            if (dados[i] && dados[i].total_likes !== undefined) {
              graphDadosVar.push(dado);
            } else {
              graphDadosVar.push(0);
            }
          }

          while (graphDadosVar.length < 10) {
            graphDadosVar.push(0);
          }
          gerarGrafico(graphDadosVar)
        });
      } else {
        console.error("Erro na requisição!");
      }
    })
    .catch(function (erro) {
      console.error("Erro de rede: ", erro);
    });
}


