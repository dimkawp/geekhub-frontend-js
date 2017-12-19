$(document).ready(function(){
    $("#input-1").change(function(){
        var input_1 = $("#input-1").val();
        console.log("VALUE input(1) : "+input_1);
    });
    $("#input-2").change(function(){
        var input_2 = $("#input-2").val();
        console.log("VALUE input(2) : "+input_2);
    });
    $("#select-1").change(function(){
        var select_1 = $("#select-1").val();
        console.log("VALUE select(1) : "+select_1);
    });
    $("#radios-1").change(function(){
        var  radios_1 = $("#radios-1").val();
        console.log("VALUE  radios(1) : "+ radios_1);
    });
    $("#radios-2").change(function(){
        var  radios_2 = $("#radios-2").val();
        console.log("VALUE  radios(2) : "+ radios_2);
    });

    $('#form').submit(function(e){
        e.preventDefault();
        console.log( $("#input-1").val() );
        console.log( $("#input-2").val() );
        console.log( $("#select-1").val() );
        console.log( $("#textarea").val() );
        console.log( $("#fieldset :radio:checked").val() );
        console.log( $("#checkbox-1").prop('checked') );
        console.log( $("#checkbox-2").prop('checked') );
        console.log( $("#checkbox-3").prop('checked') );
    });

 });
 
