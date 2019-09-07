'use strict'

// Plantillas de texto

var nombre = prompt("Escribe tu nombre ", 0);
var apellidos = prompt("Escribe tus apellidos ", 0);

var texto = `
    <h1>Hola que tal</h1>
    <h3> Mi nombre es: ${nombre}</h3>
    <h3> Mi apellidos son: ${apellidos}</h3>
`;

document.write(texto);