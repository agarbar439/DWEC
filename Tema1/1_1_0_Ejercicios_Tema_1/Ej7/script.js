function mensaje(event) {
  // event contiene la informacion de hacer clic
  var id = event.target.id; // Se obtiene el id del boton que se clicó
  var mensaje = document.getElementById("mensajeGenerado");

  if (id === "es") {
    console.log("Mensaje en Español");
  } else if (id === "en") {
    console.log("Message in English");
  } else if (id === "it") {
    console.log("Messaggio in Italiano");
  }
}
