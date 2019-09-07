'use strict'

// Array multi

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

var cine = [categorias, peliculas];

// console.log(cine[0][1]);
// console.log(cine[1][2]);

var elemento = " ";

do {
    
    elemento = prompt("Introduce tu pelicula: ");
    peliculas.push(elemento);
}
while(elemento != "ACABAR");

peliculas.pop();

console.log(peliculas);