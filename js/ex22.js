'use strict'

// Tranformacion de textos

var numero = 444;
var texto1 = "Bienvenido al curso";
var texto2 = "Bienvenido al curso y puedes ver todos mi demas curso";
var texto3 = "Es muy bien curos";

var busqueda = texto1.indexOf("curso");
var busqueda1 = texto2.lastIndexOf("curso");
var busqueda2 = texto3.search("curso");
var busqueda3 = texto1.match("curso");
var busqueda4 = texto2.match(/curso/g);
var busqueda5 = texto2.substr(14, 5);
var busqueda6 = texto2.charAt(44);
var busqueda7 = texto2.startsWith("Bienvenido"); // Solo busca al inicio del string
var busqueda8 = texto2.endsWith("curso"); // solo busca el final del string
var busqueda9 = texto1.includes("al"); // ojo se tiene que poner la palabra exacta

console.log(busqueda4);