'use strict'

// Tranformacion de textos

var numero = 444;
var texto1 = "Bienvenido al curos";
var texto2 = "Es muy bien curos";

var dato = numero.toString();

dato = texto1.toLowerCase();
dato = texto2.toUpperCase();

console.log(dato);

// Calcular la longitud
var nombre = "Juna del Pueblo";
nombre = ["hola", "oa"];

console.log(nombre.length);

// Concatenar = Unir texto
var textoTotal = texto1 + " " + texto2;
textoTotal = texto1.concat(" " + texto2);

console.log(textoTotal);