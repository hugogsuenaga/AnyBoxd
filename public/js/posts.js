function gerarEstrelas(nota) {
  let estrelasHTML = "";
  let notaAjustada = nota / 2;

  const gradientDef = `
    <svg width="0" height="0" style="position:absolute">
      <linearGradient id="halfGrad">
        <stop offset="50%" stop-color="black" />
        <stop offset="50%" stop-color="transparent" stop-opacity="0" />
      </linearGradient>
    </svg>`;

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
  return gradientDef + estrelasHTML;
}

let exibirPosts = (posts) => {
  let res = "";
  let placeholder = document.getElementById("posts-placeholder");

  if (posts.length < 1) {
  }
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    let idPost = post.idPost;
    let username = post.username;
    let titulo = post.titulo;
    let imagem = post.imagem;
    let texto = post.texto;
    let nota = post.nota;
    let numeroLikes = post.total_likes;
    let numeroComentarios = post.total_comentarios_post;
    let notaEstrelas = gerarEstrelas(nota);
    let imagemTag = "";
    let foiCurtido = post.usuario_curtiu;
    (imagem != "" && imagem != null) && (imagemTag = `<img src="${imagem}" />`);
    foiCurtido == 1 ? (foiCurtido = "fill") : (foiCurtido = "none");

    res += `<div class="post-card">
              <div class="post-header">
                <h5 class="post-username">${username}</h5>
                <h3 class="post-titulo">${titulo}</h3>
              </div>
              <div class="post-corpo">
                ${imagemTag}
                <p class="post-texto">
                ${texto}
                </p>
              </div>

              <div class="post-footer">
                <span class="post-nota">${notaEstrelas}</span>
                <div class="post-footer">
                <span class="numero-likes" id="numero-likes">${numeroLikes}</span>
                <button class="btn-curtida-placeholder" data-id-post="${idPost}" onclick="curtir(this)">️
                    <svg class="heart-button" id="heart-button" viewBox="0 0 24 24" fill="${foiCurtido}" stroke="black" 
                    stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
                <span class="numero-comentarios">${numeroComentarios}</span>
                <button class="btn-comentario-placeholder">️
                    <svg class="stars-nota" viewBox="2.5 2.5 27 22" fill="none" stroke="black" 
                        stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M24.3 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h4a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                </button>
                </div>
              </div>
            </div>`;
  }
  placeholder.innerHTML = res;
};
