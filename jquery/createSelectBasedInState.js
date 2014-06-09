(function($){
    $.fn.EstadosToCidades = function(options) {
        return this.change(function() {
          var valorEstado = this.value;
          var returnData;  
            $.ajax({
                url: options.pathOfJson,
                dataType: "json",
                type: "get",
            }).done(function(response){
                returnData = response;
                console.log(returnData.estados);
            });
        });
    }
})(jQuery);