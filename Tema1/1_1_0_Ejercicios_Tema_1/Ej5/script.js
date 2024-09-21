function mensaje(event) {
  // event contiene la informacion de hacer clic
  var id = event.target.id; // Se obtiene el id del boton que se clicó
  var mensaje = document.getElementById("mensajeGenerado");

  if (id === "es") {
    mensaje.innerHTML = "Mensaje en Español";
    mensaje.style.color = "red";
  } else if (id === "en") {
    mensaje.innerHTML = "Message in English";
    mensaje.style.color = "blue";
  } else if (id === "it") {
    mensaje.innerHTML = "Messaggio in Italiano";
    mensaje.style.color = "green";
  }
}
