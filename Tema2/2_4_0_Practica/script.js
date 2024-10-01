var tareas = [];

// Funcion para añadir tareas
function añadirTarea() {
  var valor = document.getElementById("buscar").value; // Obtener el valor del input
  if (valor !== "") {
    // Verificar si no está vacío
    console.log("Tarea añadida: " + valor);
    tareas.push({ texto: valor, completada: false }); // Añadir la tarea al array como objeto
  }
  mostrarArray();
}

// Función para ver las tareas
function mostrarArray() {
  var ver = document.getElementById("verTarea"); // Guardar en una variable el valor del Id
  ver.innerHTML = ""; // Limpiar contenido anterior

  for (var i = 0; i < tareas.length; i++) {
    var tarea = tareas[i]; // Obtenemos la tarea actual
    console.log(tarea.texto); // Mostrar por consola

    var fila = document.createElement("tr"); // Crear una fila de tabla

    // Crear una celda para la tarea
    var tareaCelda = document.createElement("td");
    var tareaElemento = document.createElement("li"); // Crear un elemento li por cada tarea
    tareaElemento.textContent = tarea.texto; // La etiqueta li contendrá el valor de cada tarea

    // Si la tarea está completada, añadir clase
    if (tarea.completada) {
      tareaElemento.classList.add("completada");
    }

    tareaCelda.appendChild(tareaElemento); // Añadir el elemento li a la celda
    fila.appendChild(tareaCelda); // Añadir la celda a la fila

    // Boton eliminar
    var eliminarCelda = document.createElement("td");
    var eliminarBoton = document.createElement("button");
    eliminarBoton.type = "button";
    eliminarBoton.textContent = "Eliminar"; // Contenido del boton
    eliminarBoton.classList.add("eliminar"); // Para el css

    eliminarBoton.addEventListener(
      "click",
      (function (index) {
        return function () {
          eliminarTarea(index);
        };
      })(i)
    );
    eliminarCelda.appendChild(eliminarBoton);
    fila.appendChild(eliminarCelda);

    // Boton completar
    var completadaCelda = document.createElement("td");
    var completadaBoton = document.createElement("button");
    completadaBoton.type = "button";
    completadaBoton.textContent = "Completada"; // Contenido del boton
    completadaBoton.classList.add("completada"); // Para el css
    completadaBoton.addEventListener(
      "click",
      (function (index) {
        return function () {
          tareaCompletada(index);
        };
      })(i)
    );
    completadaCelda.appendChild(completadaBoton);
    fila.appendChild(completadaCelda);

    ver.appendChild(fila); // Añadir la fila a la tabla
  }
}

// Función para eliminar tarea
function eliminarTarea(index) {
  console.log("Tarea eliminada: " + tareas[index].texto); // Mostrar en consola
  tareas.splice(index, 1); // Eliminar la tarea del array
  mostrarArray(); // Actualizar la tabla
}

// Funcion para completar una tarea (tachar)
function tareaCompletada(index) {
  tareas[index].completada = !tareas[index].completada; // Cambiar el estado de completada
  mostrarArray(); // Actualizar la tabla
}
