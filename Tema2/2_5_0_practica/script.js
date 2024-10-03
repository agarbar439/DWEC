// Ejercicio 3
//Funcion para cambiar el color de fondo
function cambiarColor() {
   var todo = document.body; // Guarda en variable todo el body
   todo.classList.toggle("dark-mode"); // Selecciona el elemento del css
}

var textos = [
   'Funcionamiento energía solar fotovoltaica: ¿Cómo funcionan las plantas fotovoltaicas? Proyectos Iberdrola Ingeniería Energía fotovoltaica.',
   'La energía eólica, que transforma en electricidad la fuerza de un recurso inagotable como el viento, es una apuesta sostenible y de valor para el futuro. El aprovechamiento del viento requiere de la instalación de parques eólicos, ya sea en tierra o en alta mar, con decenas de aerogeneradores.',
   'El uso eficiente de la energía, a veces simplemente llamado eficiencia energética o ahorro energético, es el objetivo de reducir la cantidad de energía requerida para proporcionar productos y servicios.'
];

// Funcion para mostrar y esconder texto
/*function verTexto(index) {
document.getElementById("mas" + (index + 1)).textContent = textos[index];


   var x = document.getElementById("text1")
   if (x.style.display === "none") {
      x.style.display = "block";
   } else {
      x.style.display = "none";
   }

   var y = document.getElementById("text2")
   if (y.style.display === "none") {
      y.style.display = "block";
   } else {
      y.style.display = "none";
   }

   var z = document.getElementById("text3")
   if (z.style.display === "none") {
      z.style.display = "block";
   } else {
      z.style.display = "none";
   }
}
*/
function verTexto(index) {
   document.getElementById("mas" + (index + 1)).textContent = textos[index];

   var elemento = document.getElementById("text" + (index + 1));
   if (elemento.style.display === "none") {
      elemento.style.display = "block";
   } else {
      elemento.style.display = "none";
   }
}