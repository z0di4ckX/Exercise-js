'use strict'

// DOM - Document object Model

function cambiaColor(color) {
    cajas.style.background = color;
}

// var cajas = document.getElementById("miCajas");
var cajas = document.querySelector("#miCajas");

cajas.innerHTML = "! TEXTO DESDE JS !";

cajas.style.background = "red";
cajas.style.padding = "20px";
cajas.style.color = "white";
cajas.className = "hola";

console.log(cajas);