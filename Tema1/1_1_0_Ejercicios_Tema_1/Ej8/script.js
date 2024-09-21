function mensaje(event) {
  // event contiene la informacion de hacer clic
  var id = event.target.id; // Se obtiene el id del boton que se clicó
  var mensaje = document.getElementById("mensajeGenerado");

  if (id === "es") {
    document.write("<p>Mensaje en Español</p>");
  } else if (id === "en") {
    document.write("<p>Message in English</p>");
  } else if (id === "it") {
    document.write("<p>Messaggio in Italiano</p>");
  }
}
