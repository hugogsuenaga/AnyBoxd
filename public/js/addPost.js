const addPost = () => {
    let idUsuario = sessionStorage.ID_USUARIO;
    let titulo = document.getElementById('ipt_titulo').value
    let imagem = document.getElementById('ipt_imagem').value
    let texto = document.getElementById('ipt_texto').value
    let nota = document.querySelector('input[name="nota"]:checked')?.value
    
fetch("/posts/insertPost", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        idUsuario: idUsuario,
        titulo: titulo,
        imagem: imagem,
        texto: texto,
        nota: nota,

      })}).then((res) => {
      return res.json().then((json) => {
        if (res.ok) {
          window.location.href = "/posts/recentes";
        } else {
          document.getElementById("div_alerta").innerHTML = '<span style="color: red; font-weight: bolder;">Post invalido!</span>';
        }
      });
    })
}