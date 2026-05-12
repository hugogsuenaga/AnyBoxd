let exibirDash = (dados) => {
  let res = "";
  let placeholder = document.getElementById("dados-placeholder");

  if (dados.length < 1) return 
  let dash = dados[0]
  let username = dash.username
  let email = dash.email
  let totalPosts = dash.total_posts
  let mediaNotas = (dash.media_notas / 2).toFixed(1)
  mediaNotas == null && (mediaNotas = "Sem notas")
  let totalCurtidasRecebidas = dash.total_curtidas_recebidas
  let totalComentariosRecebidos = dash.total_comentarios_recebidos
  
  

    res += `<p class="p_username">${username}</p>
            <p class="p_email">${email}</p>
              <div class="kpi_container">
                <div class="kpi">
                  <p class="kpi_text">Total de Posts:</p> <span class="kpi_value">${totalPosts}</span>
                  </div>
                  <div class="kpi">
                   <p class="kpi_text">Media de Notas:</p>  <span class="kpi_value">${mediaNotas}</span>
                  </div>
                  <div class="kpi">
                    <p class="kpi_text">Total de curtidas recebidas:</p> <span class="kpi_value">${totalCurtidasRecebidas}</span>
                  </div>
                  <div class="kpi">
                    <p class="kpi_text">Total de comentarios recebidos:</p> <span class="kpi_value"> ${totalComentariosRecebidos}</span>
                  </div>
                  </div>  
               </div>  
              <div>    
    `;
  placeholder.innerHTML = res;
};

