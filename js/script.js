function irArriba() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Guardar contenido original de cada card
document.querySelectorAll(".card").forEach(function(card) {
  card.dataset.original = card.innerHTML;
});

function buscar() {
  let texto = document.getElementById("buscador").value.trim();
  let cards = document.querySelectorAll(".card");

  cards.forEach(function(card) {
    // Restaurar siempre el original antes de buscar
    card.innerHTML = card.dataset.original;

    if (texto === "") {
      card.style.display = "block";
      return;
    }

    if (card.innerText.toLowerCase().includes(texto.toLowerCase())) {
      card.style.display = "block";

      // Resaltar en el HTML restaurado
      let regex = new RegExp(`(${texto})`, "gi");
      card.innerHTML = card.innerHTML.replace(regex, "<mark>$1</mark>");

    } else {
      card.style.display = "none";
    }
  });
}

document.getElementById("buscador").addEventListener("keyup", function() {
  buscar();
});

let formulario = document.getElementById("miFormulario");
if (formulario) {
  formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("miFormulario").style.display = "none";
    document.getElementById("mensajeExito").style.display = "block";
  });
}