/* Карусель */
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var opt="fullWidth true";
    var instances = M.Carousel.init(elems, opt);
});

/* Збільшення зобраення при натиску*/
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, "");
});
