'use strict'

/**
 * Operadores logicos
 * AND(Y): &&
 * OR(o): ||
 * NOT(Negacion): !
 */

 // Negacion
 var year = 2018

 if(year != 2016) {
     console.log("El ano no es 2016, realmente: " + year);
 }

 // AND
 if(year >= 2000 && year <=2020) {
     console.log("Estamos en la era acutal");
 }
 else {
     console.log("Estamos en la era post moderna");
 }

 // OR
 if(year == 2008 || year == 2018) {
     console.log("El ano acaba en 8");
 }
 else {
     console.log("Ano no registrado");
 }