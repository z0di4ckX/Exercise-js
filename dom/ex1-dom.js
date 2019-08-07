'use strict'

// DOM - Document object Model

function cambiaColor(color) {
    cajas.style.background = color;
}

var cajas = document.getElementById("miCajas");
cajas.innerHTML = "! TEXTO DESDE JS !";

cajas.style.background = "red";
cajas.style.padding = "20px";
cajas.style.color = "white";

console.log(cajas);