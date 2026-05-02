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
      fill = "url(#halfGrad)"; // Isso ativa a meia estrela
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
    let username = post.username;
    let titulo = post.titulo;
    let imagem = post.imagem;
    let texto = post.texto;
    let nota = post.nota;
    let notaEstrelas = gerarEstrelas(nota);
    let imagemTag = "";
    imagem != "" && (imagemTag = `<img src="${imagem}" />`);

    res += `<div class="post-card">
                    <div class="post-header">
                        <h5 class="post-username">${username}</h5>
                        <h3 class="post-titulo">${titulo}</h3>
                        </div>
                        <div class="post-corpo">
                        ${imagem}
                        <p class="post-texto">
                        ${texto}
                        </p>
                        </div>

                        <div class="post-footer">
                            <span class="post-nota">${notaEstrelas}</span>
                                <div class="post-footer">
                                    <button class="btn-comentario-placeholder">️</button>
                                    <button class="btn-curtida-placeholder">️</button>
                                </div>
                        </div>
                </div>`;
  }
  placeholder.innerHTML = res;
};
