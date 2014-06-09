(function($){
    $.fn.EstadosToCidades = function(options) {
        return this.change(function() {
          var valorEstado = this.value;
          var returnData = [];
            $.ajax({
                url: options.pathOfJson,
                dataType: "json",
                type: "get",
            }).done(function(response){
                $.each(response.estados, function(i, v){
                    if(v.sigla == valorEstado){
                        $.each(v.cidades, function(index,val){
                            returnData += '<option value='+ val +'>' + val +'</option>';
                        });
                    }else {
                        console.log("Não encontrei cidades baseadas na sua UF");
                    }
                });
                $(options.selectToOutput).html(returnData);
            });
        });
    }
})(jQuery);