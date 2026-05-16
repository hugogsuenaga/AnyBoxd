function login() {
  var email = ipt_email.value;
  var senha = ipt_senha.value;

  if (email == "" || senha == "") {
    div_alerta.innerHTML =
      "Preencha todos os campos!";
    return;
  }
  console.log("FORM LOGIN: ", email);
  console.log("FORM SENHA: ", senha);

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      senha: senha,
    }),
  })
    .then(function (resposta) {
      if (resposta.ok) {
        console.log(resposta);
        resposta.json().then((json) => {
          sessionStorage.ID_USUARIO = json.id;
          sessionStorage.EMAIL_USUARIO = json.email;
          sessionStorage.NOME_USUARIO = json.nome;
          sessionStorage.SENHA_USUARIO = json.senha;
        });
        window.location = "/posts/recentes";
      } else {
        console.log("Houve um erro ao tentar realizar o login!");
        div_alerta.innerHTML = `Email e/ou senha invalidos!`
        resposta.text().then((texto) => {
          console.error(texto);
        });
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });

  return;
}
