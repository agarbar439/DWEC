// Array vacio para almacenar las compras
var compras = [];

// Funcion para añadir compras
function añadirCompra() {
  var valor = document.getElementById("buscar").value; // Obtener el valor del input
  if (valor !== "") {
    // Verificar si no está vacío
    console.log("Compra añadida: " + valor);
    compras.push({ texto: valor, completada: false }); // Añadir la compra al array 
  }
  mostrarArray();
}

// Función para ver las tareas
function mostrarArray() {
  var ver = document.getElementById("verCompra"); // Guardar en una variable el valor del Id
  ver.innerHTML = ""; // Limpiar contenido anterior

  for (var i = 0; i < compras.length; i++) {
    var compra = compras[i]; // Obtenemos la compra actual
    console.log(compra.texto); // Mostrar por consola

    var fila = document.createElement("tr"); // Crear una fila de tabla

    // Crear una celda para la lista
    var listaCelda = document.createElement("td");
    var listaElemento = document.createElement("li"); // Crear un elemento li por cada tarea
    listaElemento.textContent = compra.texto; // La etiqueta li contendrá el valor de cada tarea

    // Si el elemento está comprado, añadir clase
    if (compra.completada) {
      listaElemento.classList.add("completada");
    }

    listaCelda.appendChild(listaElemento); // Añadir el elemento li a la celda
    fila.appendChild(listaCelda); // Añadir la celda a la fila

    // Boton eliminar
    var eliminarCelda = document.createElement("td");
    var eliminarBoton = document.createElement("button");
    eliminarBoton.type = "button";
    eliminarBoton.textContent = "Eliminar"; // Contenido del boton
    eliminarBoton.classList.add("eliminar"); // Para el css

    // Evento a la escucha de hacer click sobre el boton para llamar a la funcion eliminar
    eliminarBoton.addEventListener(
      "click",
      (function (index) {
        return function () {
          eliminarArticulo(index); // Recibe el index del elemento a borrar
        };
      })(i)
    );
    eliminarCelda.appendChild(eliminarBoton);
    fila.appendChild(eliminarCelda);

    // Boton completar
    var compradoCelda = document.createElement("td");
    var compradoBoton = document.createElement("button");
    compradoBoton.type = "button";
    compradoBoton.textContent = "Comprado"; // Contenido del boton
    compradoBoton.classList.add("comprado"); // Para el css

    // Evento a la escucha de hacer click sobre el boton para llamar a la funcion comprado
    compradoBoton.addEventListener(
      "click",
      (function (index) {
        return function () {
          compraCompletada(index); // Recibe el index del elemento a marcar
        };
      })(i)
    );
    compradoCelda.appendChild(compradoBoton);
    fila.appendChild(compradoCelda);

    ver.appendChild(fila); // Añadir la fila a la tabla
  }
}

// Función para eliminar tarea
function eliminarArticulo(index) {
  console.log("Compra eliminada: " + compras[index].texto); // Mostrar en consola
  compras.splice(index, 1); // Eliminar la tarea del array
  mostrarArray(); // Actualizar la tabla
}

// Funcion para completar una tarea (tachar)
function compraCompletada(index) {
  compras[index].completada = !compras[index].completada; // Cambiar el estado de completada
  mostrarArray(); // Actualizar la tabla
}
