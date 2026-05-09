let exibirDash = (dados) => {
  let res = "";
  let placeholder = document.getElementById("dados-placeholder");

  if (dados.length < 1) return 
  let dash = dados[0]
  let username = dash.username
  let email = dash.email
  let totalPosts = dash.total_posts
  let mediaNotas = dash.media_notas
  mediaNotas == null && (mediaNotas = "Sem notas")
  let totalCurtidasRecebidas = dash.total_comentarios_recebidos
  let totalComentariosRecebidos = dash.total_comentarios_recebidos
  
  

    res += `<p class="p_username">${username}</p>
    <p class="p_email">${email}</p>
            <div class="kpi_container">
            <div class="kpi">
              Total de Posts:<br> ${totalPosts}
              </div>
              <div class="kpi">
              Media de Notas: ${mediaNotas}<br>
              </div>
              <div class="kpi">
              Total de curtidas recebidas: ${totalCurtidasRecebidas}<br>
              </div>
              <div class="kpi">
              Total de comentarios: ${totalComentariosRecebidos}<br>
              </div>
            </div>  
            </div>  
            <div>    
    `;
  placeholder.innerHTML = res;
};

