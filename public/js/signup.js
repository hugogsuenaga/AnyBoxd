
   function cadastrar() {
    const nome = document.getElementById("ipt_nome").value;
    const username = document.getElementById("ipt_username").value;
    const email = document.getElementById("ipt_email").value;
    const senha = document.getElementById("ipt_senha").value;

    fetch("/signup", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        nome: nome,
        username: username,
        email: email,
        senha: senha,
      }),
    }).then((res) => {
      return res.json().then((json) => {
        if (res.ok) {
          window.location.href = "/login";
        } else {
          document.getElementById("div_alerta").innerHTML = json.mensagem;
        }
      });
    });
  }