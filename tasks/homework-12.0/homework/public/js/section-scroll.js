$(window).scroll(function(){
    if ($(window).scrollTop() >= 350) {
       $('#about').css({transition: "1s",background: "inherit"});
    }
    else {
        $('#about').css({transition: "1s",background: "#2B2D49"});
    }
    if ($(window).scrollTop() >= 850) {
        $('#features').css({transition: "1s",background: "#E7EFF1"});
     }
     else {
         $('#features').css({transition: "1s",background: "#2B2D49"});
     }
     if ($(window).scrollTop() >= 1350) {
        $('#projects').css({transition: "1s",background: "inherit"});
     }
     else {
         $('#projects').css({transition: "1s",background: "#2B2D49"});
     }
     if ($(window).scrollTop() >= 2150) {
        $('#services').css({transition: "1s",background: "#FFF9F2"});
     }
     else {
         $('#services').css({transition: "1s",background: "#2B2D49"});
     }
     if ($(window).scrollTop() >= 3250) {
        $('#blog').css({transition: "1s",background: "#E7EFF1"});
     }
     else {
         $('#blog').css({transition: "1s",background: "#2B2D49"});
     }
});