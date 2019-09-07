var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();

var textHoras = `The year is: ${year}
                 The month is: ${mes}
                 The date is: ${dia}
                 The hours is: ${hora}`;

console.log(textHoras);
console.log(Math.ceil(Math.random() * 10000));