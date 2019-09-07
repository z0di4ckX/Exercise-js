'use strict'

/**
 * Que nos diga que si un numero es par o impar.
 * Vetana prompt
 * Si no es valido que nos pida de nuevo el numero
 */

 var numero = parseInt(prompt('Introduce un numero: ', 0));

 while(isNaN(numero)) {
     numero = parseInt(prompt('Introduce un numero: ', 0));
 }

 if(numero % 2 == 0) {
     alert(`El numero ${numero} es par`);
 }
 else {
     alert(`El numero ${numero} es impar`);
 }