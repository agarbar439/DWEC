// Variables globales
let idPulsado = "";
let juegoIniciado = true;
let turnoJugador = "X";
let tablero = ["", "", "", "", "", "", "", "", ""]; // Array con las posiciones del tablero para comprobar las posiciones ganadoras
let mensajeTurno = document.getElementById("mensajeTurno");

// funcion para recoger el id pulsado
document.querySelectorAll(".celda").forEach((div) => {
  div.addEventListener("click", valor); // Se queda a la escucha de algun click en los elementos div
});

// Funcion para
function valor(e) {
  idPulsado = e.target.id;
  //alert(idPulsado);
  pintarValores();
}

// Funcion para pintar los valores en los div
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
        tablero.splice(idPulsado, 1, "X"); // Insertar en una posicion del array el turno, (1 para reemplazar el contenido de la posicion)

        // Cambiar turno
        turnoJugador = "O"; // Cambiar turno
      } else if (turnoJugador == "O") {
        // Si el turno es de O
        divPulsado.innerHTML = "O"; // Pintar O
        tablero.splice(idPulsado, 1, "O"); // Insertar en una posicion del array el turno, (1 para reemplazar el contenido de la posicion)

        turnoJugador = "X"; // Cambiar turno
      }

      mensajeTurno.innerText = `Turno de Jugador: ${turnoJugador}`; // Mostrar el turno de cada jugador
    } else {
      juegoIniciado = false;
    }
  }
  console.log(tablero);
}
