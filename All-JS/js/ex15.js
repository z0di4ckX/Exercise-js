'use strict'

// Funciones

// Una funcion es una agrupacion reutilizable de un conjunto de instrucciones

// Defino la funcion
function claculadora(n1, n2, mostrar = false) {
    
    if(mostrar == false) {

        // Conjunto de instrucciones
        console.log("Suma: " + (n1 + n2));
        console.log("Resta: " + (n1 - n2));
        console.log("Multiplicacion: " + (n1 * n2));
        console.log("Division: " +( n1 / n2));
        console.log("***********************");
    }
    else {
        
        document.write("Suma: " + (n1 + n2) + "<br />");
        document.write("Resta: " + (n1 - n2) + "<br />");
        document.write("Multiplicacion: " + (n1 * n2) + "<br />");
        document.write("Division: " +( n1 / n2) + "<br />");
        document.write("***********************");
    }
}

// Invocar o llamar a la funcion
claculadora(1, 4);
claculadora(2, 5, true);
