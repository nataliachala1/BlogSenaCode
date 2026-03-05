function irArriba() {
  window.scrollTo(0, 0);
}

function buscar() {
  let texto = document.getElementById("buscador").value.toLowerCase();
  let secciones = document.querySelectorAll("div");
  secciones.forEach(function(seccion) {
    if (seccion.innerText.toLowerCase().includes(texto)) {
      seccion.style.display = "block";
    } else {
      seccion.style.display = "none";
    }
  });
}