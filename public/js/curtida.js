function curtir(button) {
  let svg = button.querySelector("svg");
  let contador = button.parentElement.querySelector(".numero-likes");
  let semCurtida = svg.getAttribute("fill") === "none";
  let semNada = svg.getAttribute("fill") === "";

  let idUsuarioLoggado = sessionStorage.ID_USUARIO;
  let idPost = button.dataset.idPost;
  let linkCurtir = `/posts/curtir?dados=${idPost + idUsuarioLoggado}`;
  let linkDescurtir = `/posts/descurtir?dados=${idPost + idUsuarioLoggado}`;

  if (semCurtida || semNada) {
    fetch(linkCurtir, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => {
      console.log(err);
    });
    svg.setAttribute("fill", "black");

    contador.innerHTML++;
  } else {
    svg.setAttribute("fill", "none");
    fetch(linkDescurtir, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => {
      console.log(err);
    });
    contador.innerHTML--;
  }
}
