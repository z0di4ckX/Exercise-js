'use strict'

// Tabala de multiplicar de un numero introducido por pantalla

var numero = parseInt(prompt("De que numero quieres la tabla ", 1));

document.write("<h1>La Tabla del " + numero + "</h1>")

for(var i = 1; i <= 100; i++) {
    document.write(`${i} x ${numero} = ${i * numero} <br/>`);
}

for(var j = 1; j <= 100; j++) {
    document.write("<h1>La Tabla del " + j + "</h1>")
    
    for(var i = 1; i <= 100; i++) {
        document.write(`${i} x ${numero} = ${i * numero} <br/>`);
    }
}