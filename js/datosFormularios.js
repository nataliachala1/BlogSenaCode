const datosFormularios = [

{
    pagina: "formularios.html",
    categoria: "Formularios",
    etiqueta: "<form>",
    contenido: "Contenedor principal de un formulario. Define hacia dónde se envían los datos y el método de envío. Usar method post para datos privados. No anidar formularios. Siempre usar labels."
  },
  {
    pagina: "formularios.html",
    categoria: "Formularios",
    etiqueta: "<input>",
    contenido: "Campo de entrada más versátil del formulario. Cambia según el atributo type: texto, contraseña, email, checkbox. Siempre incluir el atributo name. Usar required en campos obligatorios. Vincular siempre con un label."
  },
  {
    pagina: "formularios.html",
    categoria: "Formularios",
    etiqueta: "<label>",
    contenido: "Etiqueta descriptiva de un campo. Al hacer clic en ella el cursor se mueve al campo asociado. El valor de for debe ser igual al id del input. Nunca omitir el label. Fundamental para accesibilidad."
  },
  {
    pagina: "formularios.html",
    categoria: "Formularios",
    etiqueta: "<select>, <textarea> y <button>",
    contenido: "select crea un menú desplegable de opciones. textarea permite escribir texto en múltiples líneas. button crea un botón interactivo. Siempre especificar type en button. Agregar una primera opción vacía en select."
  },

];
