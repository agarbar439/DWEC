       // Crear el tablero de tres en raya
       var tablero = [
        ['x', '', ''],
        ['', 'x', ''],
        ['', '', 'x']
    ];



    // Num aleatorio para cada 
    function numAleatorio() {
        return Math.floor(Math.random() * 3);

    }

    // Función para comprobar si hay un ganador
    function comprobarGanador(tablero) {
        var combinacionesGanadoras = [
            // Filas
            [tablero[0][0], tablero[0][1], tablero[0][2]],
            [tablero[1][0], tablero[1][1], tablero[1][2]],
            [tablero[2][0], tablero[2][1], tablero[2][2]],
            // Columnas
            [tablero[0][0], tablero[1][0], tablero[2][0]],
            [tablero[0][1], tablero[1][1], tablero[2][1]],
            [tablero[0][2], tablero[1][2], tablero[2][2]],
            // Diagonales
            [tablero[0][0], tablero[1][1], tablero[2][2]],
            [tablero[0][2], tablero[1][1], tablero[2][0]]
        ];

        for (var combinacion of combinacionesGanadoras) {
            if (combinacion[0] && combinacion[0] === combinacion[1] && combinacion[1] === combinacion[2]) {
                return combinacion[0]; // Devuelve el ganador X o O
            }
        }
        return null; // No hay ganador
    }

    // Mostrar el tablero en la interfaz
    var tableroDiv = document.getElementById('tablero');
    tablero.forEach(fila => {
        fila.forEach(casilla => {
            var casillaDiv = document.createElement('button'); //Botones para poder presionar
            casillaDiv.type = "button";
            casillaDiv.classList.add('casilla');

            casillaDiv.innerText = casilla;
            tableroDiv.appendChild(casillaDiv);
        });
    });


    function recorrerTablero(index) {
        for (var i = 0; i < tablero.length; i++) {
            casillaDiv.innerText = "x";
        }

    }


    // Comprobar el ganador y mostrar el resultado
    var ganador = comprobarGanador(tablero);
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.classList.add("resul"); // Para el css

    // Funcion para mostrar el mensaje de quien es ganador
    function final() {
        if (ganador) {
            resultadoDiv.innerText = `El ganador es: ${ganador}`;
        } else {
            resultadoDiv.innerText = 'No hay ganador';
        }
    }
    final();
