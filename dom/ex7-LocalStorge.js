'use strict'

// Localstorage

// Comporbar desponiblalidad del localstorage
if(typeof(Storage) != 'undefiend') {
    console.log("localStorage disponible");
}
else {
    console.log("Compadiple con localStorage");
}

// Guardar datos

localStorage.setItem("Titulo", "Curos de JS");

// Recuperar elementos

document.querySelector("#peliculas").innerHTML = localStorage.getItem("Titulo");

// Guardar objetos
var usuario = {
    nomber: 'Victor',
    email: 'victor@vitor.gmail.com',
    web: 'victorrobles.com'
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objetos
var userJs = JSON.parse(localStorage.getItem("usuario"));

console.log(userJs);

document.querySelector("#datos").append(userJs.web + " - " + userJs.nomber)  ;

localStorage.clear();
