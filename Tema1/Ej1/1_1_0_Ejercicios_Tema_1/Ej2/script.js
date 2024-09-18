function cambiaImagen() {
    var image = document.getElementById("image");
    if (image.src.includes("gato")) {
      image.src =
        "gato.jpeg";
    } else if (image.src.includes("pizza")){
      image.src =
        "paisaje.jpeg";
    } else{
      image.src = "pizza.png";
    }
  }
  cambiaImagen();