function irArriba() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===================== BUSCADOR GLOBAL =====================

function buscar() {
  let texto = document.getElementById("buscador").value.trim();

  // Buscar en cards de la página actual
  let cards = document.querySelectorAll(".card");
  cards.forEach(function(card) {
    card.innerHTML = card.dataset.original;
    if (texto === "") {
      card.style.display = "block";
      return;
    }
    if (card.innerText.toLowerCase().includes(texto.toLowerCase())) {
      card.style.display = "block";
      let regex = new RegExp(`(${texto})`, "gi");
      card.innerHTML = card.innerHTML.replace(regex, "<mark>$1</mark>");
    } else {
      card.style.display = "none";
    }
  });

  // Buscar en otras páginas usando datosBlog
  mostrarResultadosGlobales(texto);
}

function mostrarResultadosGlobales(texto) {
  let contenedor = document.getElementById("resultadosGlobales");
  if (!contenedor) return;

  if (texto === "") {
    contenedor.style.display = "none";
    contenedor.innerHTML = "";
    return;
  }

  let resultados = datosBlog.filter(function(item) {
    return item.contenido.toLowerCase().includes(texto.toLowerCase()) ||
           item.etiqueta.toLowerCase().includes(texto.toLowerCase());
  });

  if (resultados.length === 0) {
    contenedor.style.display = "none";
    contenedor.innerHTML = "";
    return;
  }

  let html = `<div class="card p-3 mb-3">
    <h5>🔍 Resultados en otras páginas para: "<mark>${texto}</mark>"</h5>
    <hr>`;

  resultados.forEach(function(item) {
    let resumen = item.contenido.substring(0, 100) + "...";
    html += `
      <div class="mb-3">
        <span class="badge bg-primary me-2">${item.categoria}</span>
        <b>${item.etiqueta}</b>
        <p class="text-muted mb-1" style="font-size:0.85rem;">${resumen}</p>
        <a href="${item.pagina}" class="btn btn-sm btn-outline-primary">Ver etiqueta →</a>
      </div>
      <hr>`;
  });

  html += `</div>`;
  contenedor.innerHTML = html;
  contenedor.style.display = "block";
}

// Guardar contenido original de cada card
document.querySelectorAll(".card").forEach(function(card) {
  card.dataset.original = card.innerHTML;
});

// Buscar mientras se escribe
document.getElementById("buscador").addEventListener("keyup", function() {
  buscar();
});

// ===================== FORMULARIO =====================

let formulario = document.getElementById("miFormulario");
if (formulario) {
  formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    if (!formulario.checkValidity()) {
      formulario.classList.add("was-validated");
      return;
    }
    formulario.style.display = "none";
    document.getElementById("mensajeExito").style.display = "block";
  });
}