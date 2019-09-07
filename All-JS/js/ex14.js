'use strict'

// Funciones

// Una funcion es una agrupacion reutilizable de un conjunto de instrucciones

// Defino la funcion
function claculadora(n1, n2) {
    
    // Conjunto de instrucciones
    console.log("Suma: " + (n1 + n2));
    console.log("Resta: " + (n1 - n2));
    console.log("Multiplicacion: " + (n1 * n2));
    console.log("Division: " +( n1 / n2));
    console.log("***********************");
}

// Invocar o llamar a la funcion

for(var i = 1; i <= 10; i++) {
    console.log(i);
    claculadora(i, 8);
}