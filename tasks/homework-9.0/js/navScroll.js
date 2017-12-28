$(window).scroll(function(){
    if ($(window).scrollTop() >= 50) {
       $('#head').css({ transition: "1s",position: "fixed",left: "0",right: "0",background: "#2B2D49"});
       $('header').css({height: "80px"});
    }
    else {
        $('#head').css({position: "relative",background: ""});
        $('header').css({height: "100px"});
    }
});