function comentar() {
  let urlParams = new URLSearchParams(window.location.search);
  let dados = urlParams.get("dados");

  let idUsuarioLogado = dados.split(":")[0];
  let idPost = dados.split(":")[1];
  let texto = ipt_comentario.value;

  fetch(`/posts/insertComentario`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        idUsuarioLogado: idUsuarioLogado,
      idPost: idPost,
      texto: texto,
    }),
  })
    .then(function (resposta) {
      if (resposta.ok) {
        console.log(resposta)
        resposta.json().then(function (dados) {
          console.log("Dados inseridos: \ninsertComentario");
          window.location.reload()

        });
      } else {
        console.error("Erro na requisição!");
      }
    })
    .catch(function (erro) {
      console.error("Erro de rede: ", erro);
    });
}
