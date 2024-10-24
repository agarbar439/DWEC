var tareas = [];

function añadirTarea() {
  //Recoge el valor que contiene
  var valorAñadir = document.getElementById("añadir").value;

  if (valorAñadir !== "") {
    // Si no esta vacio el campo
    tareas.push(valorAñadir); // Añade la tarea al array
    console.log("Tarea añadida");
    //document.getElementById("lista-tareas").innerText = tareas.join(', '); Comprobar que el array se muestra
  } else {
    document.getElementById("mensaje-error").innerHTML = "Error. Campo vacío"; // Si esta vacio, muestra mensaje error.
  }

  // Añadir una tarea = Listar todo otra vez
  listarTarea();
}

function listarTarea() {
  var listarTabla = document.getElementById("tabla");
  listarTabla.innerHTML = ""; // Limpiar la tabla antes de volver a listar para que no se repitan

  for (var i = 0; i < tareas.length; i++) {
    console.log(tareas[i]);

    var newTr = document.createElement("tr");
    var newTd = document.createElement("td");
    newTd.innerText = tareas[i];

    listarTabla.appendChild(newTd);
    listarTabla.appendChild(newTr);

    // Eliminar
    var eliminarCelda = document.createElement("td");
    var botonEliminar = document.createElement("button");
    botonEliminar.classList.add("eliminar"); // Para css
    botonEliminar.innerText = "Eliminar";

    botonEliminar.addEventListener(
      "click",
      (function (index) {
        return function () {
          eliminarTarea(index);
        };
      })(i)
    );

    eliminarCelda.appendChild(botonEliminar);
    newTr.appendChild(botonEliminar);

    // Completado
    var completarCelda = document.createElement("td");
    var botonCompletar = document.createElement("button");
    botonCompletar.classList.add("completar"); // Para css
    botonCompletar.innerText = "Completado";
    botonCompletar.addEventListener(
      "click",
      (function (td) {
        return function () {
          td.style.textDecoration = "line-through";
        };
      })(newTd)
    );
    completarCelda.appendChild(botonCompletar);
    newTr.appendChild(botonCompletar);
  }
}

function eliminarTarea(index) {
  tareas.splice(index, 1); // Eliminar la tarea del array
  listarTarea();
}


