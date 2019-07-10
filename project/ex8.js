'use strict'

/**
 * Calculadora:
 * Pida dos numero  por pantalla
 * Si metemos uno mal que nos vuelva a pedir
 * En el cuerpo de la pagina, en una alerta y por la consola el resultado de
 * suma, resta, multiplicacion, division esas dos cifras.
 */

var numero1 = parseInt(prompt('Introduce el primer numero: '), 0);
var numero2 = parseInt(prompt('Introduce el segundo numero: ', 0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
    
    numero1 = parseInt(prompt('Introduce el primer numero: ', 0));
    numero2 = parseInt(prompt('Introduce el segundo numero: ', 0));
}

document.write("<h1>Resultado</h1>");
var resultado = `La suma entre ${numero1} + ${numero2} es: ${numero1 + numero2} <br/>` +
                `La resta entre ${numero1} - ${numero2} es: ${numero1 - numero2} <br/>` +
                `La multiplicacion entre ${numero1} * ${numero2} es: ${numero1 * numero2} <br/>` +
                `La division entre ${numero1} / ${numero2} es: ${numero1 / numero2} <br/>`;


var resultado1 = `Resultado: \n` + 
                `La suma entre ${numero1} + ${numero2} es: ${numero1 + numero2} \n` +
                `La resta entre ${numero1} - ${numero2} es: ${numero1 - numero2} \n` +
                `La multiplicacion entre ${numero1} * ${numero2} es: ${numero1 * numero2} \n` +
                `La division entre ${numero1} / ${numero2} es: ${numero1 / numero2} \n`;

document.write(resultado);
alert(resultado1);