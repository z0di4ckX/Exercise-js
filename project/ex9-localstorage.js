'use strict'

var formulario = document.querySelector("#formpelicula");

formulario.addEventListener('submit', () => {
    
    var titulo = document.querySelector('#addpelicula').value;

    if(titulo.length >= 1) {
        localStorage.setItem(titulo, titulo);
    }
});

var ul = document.querySelector("#listMovie");
for(var i in localStorage) {

    if(typeof localStorage[i] == 'string') {

        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}

var formularioD = document.querySelector("#formDelet");

formularioD.addEventListener('submit', () => {
    
    var titulo = document.querySelector('#deletPelicula').value;

    if(titulo.length >= 1) {
        localStorage.removeItem(titulo);
    }
});