'use strict'

/**
 * 1. Pida 6 numero por pantalla y los meta en un array
 * 2. Mostrar el array entero (tods sus elementos) en el cuerpo de la pagina y en la consola
 * 3. ordenarlo y mostrarlo
 * 4. Invertir su orden y mostrarlo
 * 5. Mostrar cuanto elementos tiene el array
 * 6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
 * (Se valorara el uso de funciones)
 */

 function mostrarArray(elementos, textoCustom = " ") {
    document.write("<h1>Contenido del array " + textoCustom + "</h1>");
    
    document.write("<ul>");

    elementos.forEach((elemento, index) => {
        document.write("<li>" + elemento + "</li>");
    });

    document.write("</ul>");
 }

 var numeros = []; // Pedir 6 numero

 for(var i = 0; i <= 5; i++) {

     numeros.push(parseInt(prompt("Introduce un numero ", 0)));
 
}

// Mostrar en el cuerpo de la pagina

// document.write("<h1>Contenido del array</h1>");
// numeros.forEach((numero) => {
//     document.write("<strong>" + numero + "</strong><br />");
// });

mostrarArray(numeros);

// Mostrar en consola
console.log(numeros);

// Ordenar y mostrar
numeros.sort(
    function(a, b) {
        return a - b;
    }
);
mostrarArray(numeros, 'Ordenados');

// Mostrar alreves
numeros.reverse();
mostrarArray(numeros, 'Revertidos');

// Contar elemetos
document.write("<h1>El array tiene " + numeros.length + " elementos");

// Busqueda
var busqueda = parseInt(prompt("Busca un numero: ", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1) {
    document.write("<hr /><h1> ENCONTRADO </h1>");
    document.write(`Posicion de la busqueda: ${posicion}`);
}
else {
    document.write("<h1> NO ENCONTRADO </h1><hr />");
}