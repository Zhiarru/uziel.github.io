var cartas = [
    "1.jpg", "1.jpg", "2.jpg", "2.jpg",
    "3.jpg", "3.jpg", "4.jpg", "4.jpg",
    "5.jpg", "5.jpg", "6.jpg", "6.jpg",
    "7.jpg", "7.jpg", "8.jpg", "8.jpg",
];

var imagenTemporal, esperando = false;
var contador = 0;

function mostrarImagen(imagen, indice){
    imagen.src = `./img/${cartas[indice]}`;
    imagen.removeAttribute("onclick");

    if (!esperando){
        imagenTemporal = imagen;
    }
    else{
        if (imagenTemporal.src == imagen.src){
            setTimeout(function(){eliminarPar(imagenTemporal, imagen)},500);
        }
        else{
            setTimeout(function(){regresar(imagenTemporal, imagen)},500);
        }
    }
    esperando = !esperando;
}

function regresar(imagen1, imagen2){
    imagen1.src = "./img/0.jpg";
    imagen2.src = "./img/0.jpg";
    imagen1.setAttribute("onclick", `mostrarImagen(this, ${imagen1.id})`);
    imagen2.setAttribute("onclick", `mostrarImagen(this, ${imagen2.id})`);
}

function eliminarPar(imagen1, imagen2){
    imagen1.style.visibility = "hidden";
    imagen2.style.visibility = "hidden";
    imagen1.removeAttribute("onclick");
    imagen2.removeAttribute("onclick");
    contador++;
    if (contador != 8){
        document.getElementById("contador").innerHTML = `Pares encontrados: ${contador}`;
    } 
    else{
        document.getElementById("contador").innerHTML = `Pares encontrados: ${contador}. ¡Felicidades! Ganaste. :D`;
    }
}

function revolver(){
    var j = 0;
    for (i = 15; i > 0; i--){
        j = Math.floor(Math.random() * (i+1));
        [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
    }
}

function fondo(){
    var fondo = Math.ceil(Math.random() * 3);
    document.getElementById("tablero").style = `background-image: url("./img/fondo${fondo}.jpg");`;
}

function reiniciar(){
    location.reload();
}