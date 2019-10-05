$(document).ready(function() {
    // Selector de ID

    $("#rojo").css("background", "red")
               .css("color", "white");
    
    $("#amarillo").css("background", "yellow")
                  .css("color", "green");
    
    $("#verde").css("background", "green")
                  .css("color", "yellow");
    
    var miClase = $(".zebra").css("padding", "5px");

    $(".sinBorde").click(function() {
        $(this).addClass('zebra');
    });

    // Selectores de etiqueta
    var parrafos = $('p').css("cursor", "pointer");

    parrafos.click(function() {
        var that = $(this);

        if(!that.hasClass('grande')) {
            that.addClass('grande');
        }
        else {
            that.removeClass('grande');
        }
    });
});