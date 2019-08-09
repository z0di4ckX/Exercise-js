'use strict'

// Eventos del raton (Mouse)

window.addEventListener('load', () => {
    function cambiarColor() {
        console.log("Me has dado click");
    
        var bg = boton.style.background;
        if(bg == "green") {
            
            boton.style.background = "red";
        }
        else {
            boton.style.background = "green";
        }
    
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";
    
        return true;
    }
    
    var boton = document.querySelector("#boton");
    
    // Click
    boton.addEventListener('click', function() {
    
        cambiarColor();
    
    });
    
    // Mouse over
    boton.addEventListener('mouseover', () => {
    
        boton.style.background = "yellow";
    
    });
    
    // Mouse out
    boton.addEventListener('mouseout', () => {
    
        boton.style.background = "#ccc";
    
    });
    
    // Focus 
    
    var input = document.querySelector("#campo_nombre");
    
    input.addEventListener('focus', () => {
    
        console.log("[focus] Estas dentro del input");
    
    });
    
    // Blur
    
    input.addEventListener('blur', () => {
    
        console.log("[blur] Estas fuerta del input");
    
    });
    
    // Keydown
    
    input.addEventListener('keydown', (event) => {
    
        console.log("[keydown] Pulsando esta tecla ", String.fromCharCode(event.keyCode));
    
    });
    
    // Keypress
    
    input.addEventListener('keypress', (event) => {
    
        console.log("[keypress] Tecla presionada ", String.fromCharCode(event.keyCode));
    
    });
    
    // keyup
    
    input.addEventListener('keyup', (event) => {
    
        console.log("[keyup] Tecla soltada ", String.fromCharCode(event.keyCode));
    
    });
});