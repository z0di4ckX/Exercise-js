'use strict'

// Tranformacion de textos

var numero = 444;
var texto1 = "Bienvenido al curso";
var texto2 = "Bienvenido al curso y puedes ver todos mi demas curso";
var texto3 = "Es muy bien curos";

var busqueda = texto1.indexOf("curso"); // cuenta en cuando caractere se encuentra la palabra
var busqueda1 = texto2.lastIndexOf("curso"); // cuenta cuando caratere se ecuentra la palabra pero de atras.
var busqueda2 = texto3.search("curso"); // busca la palabra
var busqueda3 = texto1.match("curso"); // compara cuandas palabras son iguales
var busqueda4 = texto2.match(/curso/g); // cuenta cuandas palabras son iguales en un arreglo
var busqueda5 = texto2.substr(14, 5); // cuneta los caracteres que se la han idicados
var busqueda6 = texto2.charAt(44); // solo muestra la letra que se encuentra en esa candidad de caracteres
var busqueda7 = texto2.startsWith("Bienvenido"); // Solo busca al inicio del string
var busqueda8 = texto2.endsWith("curso"); // solo busca el final del string
var busqueda9 = texto1.includes("al"); // ojo se tiene que poner la palabra exacta
var busqueda10 = texto1.replace("curso", "JavaScript"); // remplaca una plabra por otra
var busqueda11 = texto1.slice(14); // solo muestra los caracteres que se encuentra a partir del numero indicado.
var busqueda12 = texto1.split(" "); // coloca todo dentro de un array
var busqueda13 = texto1.trim(); // Elimina los espacios que tenga un string

console.log(busqueda4);