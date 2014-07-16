(function($){
    $.fn.EstadosToCidades = function(options) {
        var selector = $(this)[0];
            $(selector).attr("disabled", "disabled");
        var jsonReturn;
        $.ajax({
            url: options.pathOfJson,
            dataType: "json",
            type: "get",
        }).done(function(response){
            jsonReturn = response;
            $(selector).removeAttr("disabled");
        });
        
        return this.change(function() {
            var valorEstado = this.value;
            var returnData = [];

            $.each(jsonReturn.estados, function(i, v){
                if(v.sigla === valorEstado){
                    $.each(v.cidades, function(index,val){
                        returnData += '<option value='+ val +'>' + val +'</option>';
                    });
                }
            });
            $(options.selectToOutput).html(returnData);
        });
        
    }
})(jQuery);