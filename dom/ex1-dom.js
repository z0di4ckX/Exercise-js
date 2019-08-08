'use strict'

// DOM - Document object Model

function cambiaColor(color) {
    cajas.style.background = color;
}

// Conseguir elementos con un ID concreto

// var cajas = document.getElementById("miCajas");
var cajas = document.querySelector("#miCajas");

cajas.innerHTML = "! TEXTO DESDE JS !";

cajas.style.background = "red";
cajas.style.padding = "20px";
cajas.style.color = "white";
cajas.className = "hola";

// Conseguir elementos por su etiqueta
var todosLosDiv = document.getElementsByTagName('div');

// var contenidoTexto = todosLosDiv[2];
// contenidoTexto.innerHTML = "Otro texto para el segundo elemento";

// console.log(contenidoTexto);

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

var valor;
for(valor in todosLosDiv) {
    if(typeof todosLosDiv[valor].textContent == "string") {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDiv[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}

seccion.append(hr);
// Conseguir elementos por su clases css

var divsRojos = document.getElementsByClassName('rojo');

var div;
for(div in divsRojos) {
    
    if(divsRojos[div].className == "rojo") {

        divsRojos[div].style.background = "red";
    
    }
}