'use strict'

// condicional if

var edad = 34;
var nombre = 'David Suarez';

/*
// Operadores relacionales
   Mayor: >
   Menor: <
   Mayor o igual: >=
   Menor o igual: <=
   Igual: ==
   Distinto: !
   Distinto o igual: !=
*/

if(edad >= 18) {
    console.log(nombre + " tiene" + edad + " es mayor de edad.");

    if(edad <= 33) {
        console.log("Todavia eres millenial");
    }
    else if(edad >= 70) {
        console.log("Eres anciano");
    }
    else {
        console.log("Ya no eres milenial");
    }
}
else {
    console.log(nombre + " tiene" + edad + " es menor de edad.");
}