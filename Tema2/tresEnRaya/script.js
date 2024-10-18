// Variables globales
let idPulsado = "";
let juegoIniciado = true;
let turnoJugador = "X";
let tablero = ["", "", "", "", "", "", "", "", ""]; // Array con las posiciones del tablero
let mensajeTurno = document.getElementById("mensajeTurno");

// funcion para recoger el id pulsado
document.querySelectorAll(".celda").forEach((div) => {
  div.addEventListener("click", valor); // Se queda a la escucha de algun click en los elementos div
});

function valor(e) {
  idPulsado = e.target.id;
  //alert(idPulsado);
  pintarValores();
}

function pintarValores() {
  var divPulsado = document.getElementById(idPulsado); // Recoger el id pulsado
  if (!juegoIniciado) {
    // Si el juego no esta iniciado, nada
    return;
  }

  // Si el juego esta iniciado
  if (juegoIniciado) {
    if (divPulsado && divPulsado.textContent == "") {
      // Comprobar que la celda este vacia
      if (turnoJugador == "X") {
        // Si el turno es X
        divPulsado.innerHTML = "X"; // Pintar X
        // Cambiar turno
        turnoJugador = "O"; // Cambiar turno
      } else if (turnoJugador == "O") {
        // Si el turno es de O
        divPulsado.innerHTML = "O"; // Pintar O
        turnoJugador = "X"; // Cambiar turno
      }
      mensajeTurno.innerText = `Turno de Jugador: ${turnoJugador}`; // Mostrar el turno de cada jugador
    } else{
        juegoIniciado = false;
    }
  }
}


