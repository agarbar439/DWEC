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
    comprobarGanador();
  }
  console.log(tablero);
}

// Función para comprobar el ganador
function comprobarGanador() {
  // Definir las combinaciones ganadoras
  const combinacionesGanadoras = [
    [0, 1, 2], // Primera fila
    [3, 4, 5], // Segunda fila
    [6, 7, 8], // Tercera fila
    [0, 3, 6], // Primera columna
    [1, 4, 7], // Segunda columna
    [2, 5, 8], // Tercera columna
    [0, 4, 8], // Diagonal principal
    [2, 4, 6], // Diagonal secundaria
  ];

  // Iterar a través de las combinaciones ganadoras
  for (let i = 0; i < combinacionesGanadoras.length; i++) {
    let a = combinacionesGanadoras[i][0];
    let b = combinacionesGanadoras[i][1];
    let c = combinacionesGanadoras[i][2];

    // Verificar si las posiciones de la combinación tienen el mismo valor y no están vacías
    if (
      tablero[a] !== "" &&
      tablero[a] === tablero[b] &&
      tablero[b] === tablero[c]
    ) {
      juegoIniciado = false; // Parar el juego
      let ganador = tablero[a];
      mensajeTurno.innerText = "El ganador es: " + ganador;
      return; // Salir de la función si hay un ganador
    }
  }

  // Comprobar si el tablero está lleno y no hay ganador (empate)
  if (!tablero.includes("")) {
    juegoIniciado = false; // Detener el juego
    mensajeTurno.innerText = "Es un empate";
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
