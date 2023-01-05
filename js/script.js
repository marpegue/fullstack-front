$("#tamano").on('change', function() {
    console.log(this.value);
    // Aqui va la llamada AJAX con JQuery  method="POST" action="http://localhost:5000/checksize"
    $.ajax({
        type: "POST",
        url: "http://localhost:5000/checksize",
        data: {
            size: this.value
        },
        success: function (result) {
            $("#resultado_tamano").text(result);
        }
    });
});