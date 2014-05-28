(function($){
    $.fn.EstadosToCidades = function(options) {
        return this.change(function() {
          var valorEstado = this.value;
            $.ajax({
                url: options.pathOfJson,
                dataType: "json",
                type: "get",
            }).done(function(response){
                $.map(response, function(el) {
                    if(el.sigla === "A"){
                        console.log(el)
                    }
                });
                console.log(response);
            });

        });
    }
})(jQuery);