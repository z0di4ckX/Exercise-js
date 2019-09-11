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
});