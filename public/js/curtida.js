 function curtir(button) {
    let svg = button.querySelector('svg');
    let contador = button.parentElement.querySelector(".numero-likes");
    let semCurtida = svg.getAttribute('fill') === 'none'
    let semNada = svg.getAttribute('fill') === ''
    if (semCurtida || semNada) {
        svg.setAttribute('fill', 'black'); 
        contador.innerHTML++
    } else {
        svg.setAttribute('fill', 'none'); 
        contador.innerHTML--
    }
  }