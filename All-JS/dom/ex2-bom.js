'use strict';

// BOM Browser Object Model

// sacar la medida de la venta del navegador
function getBom() {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
}

getBom();

// sacar la medida de la ventana del navegador competo 
function getBom2() {
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location);
}

getBom2();

// redirect
function redirect(url) {
    window.location.href = url;
}

// abrir una ventana nueva 
function abrirVentana(url) {
    window.open(url);
}