'use strict'

// Arrays, Arreglos, Matrices

var nombre = "Juan del Pueblo";
var nombre = ["Juan del Pueblo", "Junito del Campo", "Manolo Garcia", "Jose Martin", 43, true];

var lenguales = new Array("PhP", "JS", "GO", "Java","Python");

// var elemento = parseInt(prompt("Que elemento del array quieres? ", 0));

// if(elemento >= nombre.length) {
//     alert(`Introduce el numero correcto menor que ${nombre.length}`);
// }
// else {
    
//     alert(`El usuario seleccionado es ${nombre[elemento]}`);
// }

document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");

// for(var i = 0; i < lenguales.length; i++) {
    
//     document.write("<li>" + lenguales[i] + "</li>");
// }

lenguales.forEach((elemento, index) => {

    document.write("<li>" + index + " - " + elemento + "</li>");

});

document.write("</ul>");