function irArriba() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function buscar() {
  let texto = document.getElementById("buscador").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(function(card) {
    if (card.innerText.toLowerCase().includes(texto)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

document.getElementById("miFormulario").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("miFormulario").style.display = "none";
  document.getElementById("mensajeExito").style.display = "block";
});