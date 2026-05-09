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
    type: "bar",
    data: {
      labels: labelsPosts,
      datasets: [
        {
          label: "Curtidas por Post",
          data: graphDados,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          borderRadius: 8, //
          borderWidth: 1,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      mantainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true,
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
};
