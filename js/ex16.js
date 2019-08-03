'use strict'

// Funciones

// Una funcion es una agrupacion reutilizable de un conjunto de instrucciones

// Defino la funcion

function porConsola(n1, n2) {
    console.log("Suma: " + (n1 + n2));
    console.log("Resta: " + (n1 - n2));
    console.log("Multiplicacion: " + (n1 * n2));
    console.log("Division: " +( n1 / n2));
    console.log("***********************");
}

function porPantalla(n1, n2) {
    document.write("Suma: " + (n1 + n2) + "<br />");
    document.write("Resta: " + (n1 - n2) + "<br />");
    document.write("Multiplicacion: " + (n1 * n2) + "<br />");
    document.write("Division: " +( n1 / n2) + "<br />");
    document.write("***********************");
}

function claculadora(n1, n2, mostrar = false) {
    
    if(mostrar == false) {
        porConsola(n1, n2);
    }
    else {
        porPantalla(n1, n2);
    }
}

// Invocar o llamar a la funcion
claculadora(1, 4);
claculadora(2, 5, true);
