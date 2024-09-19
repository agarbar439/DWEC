function cambiaImagen() {
    var image = document.getElementById("image");
    if (image.src.includes("ia")) {
      image.src =
        "gato.jpeg";
    } else if (image.src.includes("gato")){
      image.src =
        "paisaje.jpeg";
    } else if (image.src.includes("paisaje")){
      image.src = "pizza.png";
    } else {
      image.src = "ia.jpeg";
    }
  }
  cambiaImagen();