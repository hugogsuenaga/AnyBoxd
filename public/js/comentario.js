function comentario() {
  let urlParams = new URLSearchParams(window.location.search);
  let dados = urlParams.get("dados");
  let idUsuarioLogado = dados.split(":")[0];
  let idPost = dados.split(":")[1];
  fetch(`/posts/getComentario?dados=${idPost}:${idUsuarioLogado}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (resposta) {
      if (resposta.ok) {
        resposta.json().then(function (dados) {
          console.log("Dados recebidos: \ngetComentario");
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

function gerarEstrelas(nota) {
  // Injeta o gradiente uma única vez no body, fora do innerHTML
  if (!document.getElementById("halfGrad")) {
    document.body.insertAdjacentHTML("afterbegin", `
      <svg width="0" height="0" style="position:absolute; display:none">
        <defs>
          <linearGradient id="halfGrad">
            <stop offset="50%" stop-color="black" />
            <stop offset="50%" stop-color="transparent" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>`);
  }

  let estrelasHTML = "";
  let notaAjustada = nota / 2;

  for (let i = 1; i <= 5; i++) {
    let fill = "none";
    if (notaAjustada >= i) {
      fill = "black";
    } else if (notaAjustada >= i - 0.5) {
      fill = "url(#halfGrad)";
    }

    estrelasHTML += `
      <svg class="stars-nota" viewBox="0 0 24 24" fill="${fill}" stroke="black"
           stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>`;
  }
  return estrelasHTML; // sem gradientDef aqui
}

let exibirPosts = (posts) => {
  let res = "";
  let placeholder = document.getElementById("comentario-placeholder");

  if (posts.length < 1)
    return (placeholder.innerHTML += "Nenhum post encontrado");

  let idUsuario = sessionStorage.ID_USUARIO;
  let post = posts[0];
  let idPost = post.idPost;
  let username = post.autor_post;
  let titulo = post.titulo;
  let imagem = post.imagem;
  let texto = post.texto_post;
  let nota = post.nota;
  let numeroLikes = post.total_likes;
  let numeroComentarios = post.total_comentarios_post;
  let foiCurtido = post.usuario_curtiu;

  let notaEstrelas = gerarEstrelas(nota);
  let imagemTag = "";
  let textoTag = "";

  texto != "" &&
    texto != null &&
    (textoTag = `<p class="post-texto">${texto}</p>`);
  imagem != "" &&
    imagem != null &&
    (imagemTag = `<img class="post-imagem" src="${imagem}" />`);
  foiCurtido == 1 ? (foiCurtido = "black") : (foiCurtido = "none");

  let com = "";
  for (let i = 0; i < posts.length; i++) {
    let comentarioTexto = posts[i].texto_comentario;
    let autorComentario = posts[i].autor_comentario;

    comentarioTexto != "" && comentarioTexto != null
      ? (comentarioTexto = `<p class="comentario-texto">${comentarioTexto}</p>`)
      : (comentarioTexto = "Sem comentarios");
    autorComentario != "" && autorComentario != null
      ? (autorComentario = `<p class="comentario-username">${autorComentario}</p>`)
      : (autorComentario = "");

    com += `<div class="comentario-card">
              ${autorComentario}
              ${comentarioTexto}
            </div>`;
  }

  res += `<div class="post-card">
  <div class="post-header">
    <h5 class="post-username">${username}</h5>
    <h3 class="post-titulo">${titulo}</h3>
  </div>
  <div class="post-corpo">
    ${imagemTag}
    ${textoTag}
  </div>
  <div class="post-footer">
    <span class="post-nota">${notaEstrelas}</span>
    <div class="post-acoes">
      <span class="numero-likes" id="numero-likes">${numeroLikes}</span>
      <button class="btn-curtida-placeholder" data-id-post="${idPost}" onclick="curtir(this)">
        <svg class="heart-button" id="heart-button" viewBox="0 0 24 24" fill="${foiCurtido}" stroke="black"
          stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </button>
    </div>
  </div>
  <br>
  <textarea id="ipt_comentario" class="ipt_comentario" maxlength="620" placeholder="Comente algo legal!"></textarea>
  <br>
  <hr class="quebra">
  ${com}
</div>`;

  return (placeholder.innerHTML = res);
};