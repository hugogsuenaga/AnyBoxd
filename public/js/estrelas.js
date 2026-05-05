function estrelas() {
  fetch("/view/includes/starL.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("starL-placeholder").innerHTML = data;
    });

  fetch("/view/includes/starR.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("starR-placeholder").innerHTML = data;
    });
}
