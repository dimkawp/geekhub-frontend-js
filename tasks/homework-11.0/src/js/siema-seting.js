function onInitCallback() {
    console.log('Siema initialised bro :)');
}

function onChangeCallback() {
    console.log('The index of current slide is: ' + this.currentSlide);
}

var mySiema = new Siema({
    onInit: onInitCallback,
    onChange: onChangeCallback,
    perPage: 5
});

var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

prev.addEventListener('click', function () {
    return mySiema.prev();
});
next.addEventListener('click', function () {
    return mySiema.next();
});