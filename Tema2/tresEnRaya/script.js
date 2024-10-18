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
    if (divPulsado && divPulsado.textContent == "") { // Comprobar que la celda este vacia
      if (turnoJugador == "X") {
        // Si el turno es X
        divPulsado.innerHTML = "X"; // Pintar X
        tablero.splice(idPulsado, 1, "X"); // Insertar en una posicion del array el turno, (1 para reemplazar el contenido de la posicion)
        // Cambiar turno
        turnoJugador = "O";
      } else if (turnoJugador == "O") {
        // Si el turno es de O
        divPulsado.innerHTML = "O"; // Pintar O
        tablero.splice(idPulsado, 1, "O"); // Insertar en una posicion del array el turno, (1 para reemplazar el contenido de la posicion)

        turnoJugador = "X"; // Cambiar turno
      }
      // Mensaje del turno de jugador actual
      mensajeTurno.innerText = `Turno de Jugador: ${turnoJugador}`; // Mostrar el turno de cada jugador
    } else {
      mensajeTurno.innerText = "Juego terminado";
      juegoIniciado = false;
    }
  }
  console.log(tablero);
  
}

// Funcion comprobar ganador
function comprobarGanador() {
  for (let i = 0; i < tablero.length; i++) {
    // Comprobar primera fila
    if (tablero[0] === tablero[1] && tablero[1] === tablero[2]) {
      juegoIniciado = false;
      let ganador = tablero[0];
      mensajeTurno.innerText = "El ganador es: " + ganador;
      // Comprobar segunda fila

    } else if (tablero[3] === tablero[4] && tablero[4] === tablero[5]) {
      juegoIniciado = false;
      let ganador = tablero[3];
      mensajeTurno.innerText = "El ganador es: " + ganador;
      // Comprobar tercera fila

    } else if (tablero[6] === tablero[7] && tablero[7] === tablero[8]) {
      juegoIniciado = false;
      let ganador = tablero[6];
      mensajeTurno.innerText = "El ganador es: " + ganador;
    }

  }
}
// Funcion para resetear el juego
function resetJuego() {
  // Limpiar el array
  tablero = ["", "", "", "", "", "", "", "", ""]; // Array con las posiciones del tablero para comprobar las posiciones ganadoras
  juegoIniciado = true; // Iniciar el juego
  // Limpiar el texto de cada celda
  document.querySelectorAll(".celda").forEach((div) => {
    div.innerHTML = "";
  });
  mensajeTurno.innerText = "Pulsa sobre el tablero para volver a jugar";
}

