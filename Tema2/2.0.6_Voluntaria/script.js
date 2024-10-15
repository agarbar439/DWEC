function crearTabla() {
  const filas = 5;
  const columnas = 3;

  //Controla el numero de tablas
  for (let a = 1; a <= 4; a++) {
    const tabla = document.getElementById(`tablaBingo${a}`);

    //Controla el numero de filas
    for (let i = 0; i < filas; i++) {
      const fila = document.createElement("tr");

      // Controla las columnas
      for (let j = 0; j < columnas; j++) {
        const celda = document.createElement("td");
        celda.textContent = generarNumeroAleatorio(1, 75);
        fila.appendChild(celda);
      }

      tabla.appendChild(fila);
    }
  }
}
crearTabla();
function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const juegoIniciado = false;

function iniciarJuego(){
    juegoIniciado = true;
    
}