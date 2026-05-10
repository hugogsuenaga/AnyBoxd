let gerarGrafico = (graphDados) => {
  const ctx = document.getElementById("graph").getContext("2d");
  const labelsPosts = [
    "Post 1",
    "Post 2",
    "Post 3",
    "Post 4",
    "Post 5",
    "Post 6",
    "Post 7",
    "Post 8",
    "Post 9",
    "Post 10",
  ];
  const meuGrafico = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Post 1', 'Post2 ', 'Post 3', 'Post 4', 'Post 5', 'Post 6', 'Post 7', 'Post 8', 'Post 9', 'Post 10'],
    datasets: [{
      data: graphDados,
      backgroundColor: '#000', // Preto puro
      borderWidth: 0,
      borderRadius: 15,      
      borderSkipped: false,
      barThickness: 40, // Ajuste esse número para a grossura das barras
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false, // Isso aqui é o que permite o gráfico ser longo
    devicePixelRatio: 2, 
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        grid: { display: true },
        border: { display: true, color: '#000', width: 2 },
        ticks: { color: '#000', font: { size: 12, weight: 'bold' }, precision: 0, beginAtZero: true }
      },
      y: {
        grid: { display: false },
        border: { display: false },
        ticks: { 
          color: '#000', 
          autoSkip: false, // Garante que não suma nenhum "Post"
          font: { size: 14, weight: 'bold', family: 'sans-serif' } 
        }
      }
    }
  }
})}
