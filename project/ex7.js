'use strict'

// Tabala de multiplicar de un numero introducido por pantalla

var numero = parseInt(prompt("De que numero quieres la tabla ", 1));

document.write("<h1>La Tabala del " + numero + "</h1>")

for(var i = 1; i <= 100; i++) {
    document.write(`${i} x ${numero} = ${i * numero} <br/>`);
}