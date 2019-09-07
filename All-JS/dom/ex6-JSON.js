'use strict'

window.addEventListener('load', () => {

    var peliculas = {
        titulo: 'Batman vs Surperman',
        year: 2018,
        pais: 'Estados Unidos'
    };
    
    var peliculas = [
        { titulo: 'La verdad duele', year: 2017, pais: 'Franca' },
        peliculas
    ];
    
    var cajasPeliculas = document.querySelector("#peliculas");

    var index;
    for(index in peliculas) {
        var p = document.createElement("p");
        p.append(peliculas[index].titulo + " - " + peliculas[index].year);
        cajasPeliculas.append(p);
    }

});