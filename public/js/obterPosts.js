  function obterPostsDoServidor() {
      fetch("/posts/orderByLikes", {
          method: "GET"
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