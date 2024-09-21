function mensaje(event) {
  // event contiene la informacion de hacer clic
  var id = event.target.id; // Se obtiene el id del boton que se clicó
  var mensaje = document.getElementById("mensajeGenerado");

  if (id === "es") {
    alert("Mensaje en Español");

  } else if (id === "en") {
   alert("Message in English");

  } else if (id === "it") {
   alert("Messaggio in Italiano");
  }
}
