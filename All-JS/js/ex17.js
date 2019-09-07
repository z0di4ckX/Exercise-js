'use strict'

// Parametros REST y SPREAD

/**
 * f1 = frutas 1
 * f2 = frutas 2 
 */

function listadoFrutas(f1, f2, ...resto_de_frutas) {
    console.log("Fruta 1: ", f1);
    console.log("Fruta 2: ", f2);
    console.log(resto_de_frutas);
}

// REST
listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

// SPREAD
var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas,"Sandia", "Pera", "Melon", "Coco");