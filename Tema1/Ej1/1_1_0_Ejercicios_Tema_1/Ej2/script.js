function cambiaImagen() {
    var image = document.getElementById("image");
    if (image.src.matches("gato")) {
      image.src =
        "gato.jpeg";
    } else if (image.src.matches("pizza")){
      image.src =
        "paisaje.jpeg";
    } else if (image.src.matches("paisaje."){
      image.src = "pizza.png";
    }
  }
  cambiaImagen();