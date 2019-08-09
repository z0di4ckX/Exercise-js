'use strict'

// Timer

window.addEventListener('load', () => {

    function intervalo() {
        
        var tiempo = setInterval(() => {
            console.log("Set Interval ejecutado ");
    
            var encabezado = document.querySelector("h1");
    
            if(encabezado.style.fontSize == "40px") {
                encabezado.style.fontSize = "20px";
            }
            else {
                encabezado.style.fontSize = "40px";
            }
        }, 1000);

        return tiempo;
    }


    // var tiempo = setTimeout(() => {

    //     console.log("Set TimeOut ejecutado: ");

    //     var encabezado = document.querySelector("h1");

    //     if(encabezado.style.fontSize == "40px") {
            
    //         encabezado.style.fontSize = "30px";
    //     }
    //     else {
            
    //         encabezado.style.fontSize = "40px";
    //     }
    // }, 5000);

    var tiempo = intervalo();

    var stop = document.querySelector("#stop");

    stop.addEventListener("click", () => {

        alert("Has parado el intervalo");
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");

    start.addEventListener("click", () => {

        alert("Has inciado el intervalo");
        intervalo();
    });
});