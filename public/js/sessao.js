// sessão
function validarSessao() {
  var email = sessionStorage.EMAIL_USUARIO;
  var nome = sessionStorage.NOME_USUARIO;

  if (email == null && nome == null) {
  if (window.location.pathname != '/login' && 
      window.location.pathname != '/singup' &&
      window.location.pathname != '/'
  ) {
        window.location = "/login";
    }
    return false;
  } else {
    return true;
  }
}

function headerSessao() {
  let val = validarSessao();
  if (val) {
    fetch("/view/includes/header_logged.html")
      .then((res) => res.text())
      .then((data) => {
        document.getElementById("header-placeholder").innerHTML = data;
      });
  } else {
    fetch("/view/includes/header.html")
      .then((res) => res.text())
      .then((data) => {
        document.getElementById("header-placeholder").innerHTML = data;
      });
  }
}

function limparSessao() {
  sessionStorage.clear();
  window.location = "/login";
}
