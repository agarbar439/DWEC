
function verificar(id, correcto){
    var frase = document.getElementById(id); // Recibir el id de la frase (para que no se)

    if(correcto){ // Si el valor es true pintar de verde
        frase.style.color = "green";
    } else{
        frase.style.color = "red";
    }
  }