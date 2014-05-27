(function($){
    $.fn.EstadosToCidades = function(options) {
        return this.change(function() {
          var valorEstado = this.value;

            $.get(options.pathOfJson, function(data){
                console.log(data);
                console.log("Success");
            }).always(function(data) {
                a1 = JSON.parse(data);
                console.log(a1);
                console.log( "complete" );
            });
        });
    }
})(jQuery);