$(document).ready(function(){
    /* #addClass */
    $("#addClass").click(function(){
        $("#addClass").addClass("btn btn-primary");
    });
    /* #removeClass */
    $("#removeClass").click(function(){
        $("#removeClass").removeClass("btn btn-primary");
    });
    /* #toggleClass */
    $("#toggleClass").click(function(){
        $("#toggleClass").toggleClass("btn btn-primary");
    });
    /* getAttr */
    $("#getAttr").click(function(){
        var className = $("#getAttr").attr("class");
        $("#getAttr").text(className);
    });
    /* setAttr */
    $("#setAttr").click(function(){
        $("#setAttr").attr({
            "name": "button-name",
            "value": "value"
        });        
    });
    /* alertOnClick */
    $("#alertOnClick").click(function(){
        alert("AlertOnClick");
    });
    /* triggerAlert */
    $('#alertOnClick').bind('custom', function(event, param){
        alert("AlertOnClick vs " + param);
    });
    $("#triggerAlert").click(function(){
        $('#alertOnClick').trigger('custom', ['triggerAlert']);
    });
    /* cloneThis */
    $("#cloneThis").click(function(){
        var text = $("#cloneThis").attr("value");
        $("#cloneThis").clone().text(text + " - Clone").appendTo(".block");
    });
    /*closestElement*/
    $("#closestElement").click(function(){
        var className = $("#closestElement").closest("div").attr("class");
        console.log(className);
    });
    /* eachBtnText */
    $("#eachBtnText").click(function(){
        $("button").each(function(){
            console.log($(this).text())
        });
    });
    /* findMe */
    $("#findMe").click(function(){
        var button = $("#findMe");
        console.log($("body").find(button));
    });
    /* fadeInText */    
    $("#fadeInText").click(function(){
        $("#fade").fadeIn();
    });    
    /* fadeOutText */    
    $("#fadeOutText").click(function(){
        $("#fade").fadeOut();
    });
    /* hideText */    
    $("#hideText").click(function(){
        $("#fade").hide();
    });
    /* showText */    
    $("#showText").click(function(){
        $("#fade").show();
    });
    /* dataAboutMe */
    $("#dataAboutMe").click(function(){
        var element = $("#dataAboutMe");
        var width = element.css('width');
        var height = element.css('height'); 
        var top = element.position();
        var attr = element.attr("id","type","class");
        var parent = element.parent();  
        var text = element.text(); 
        var siblings = element.siblings();
        var next = element.next();
        var prev = element.prev();
        console.log(width,height,top,attr,parent,text,next,prev,siblings);
    });
});
