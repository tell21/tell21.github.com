$("document").ready(function(){

    var nav = $('.navbar-edit');
    var img = $('.logo-size');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            nav.addClass("background-color-scroll");
            img.addClass("logo-size-scroll");
            img.removeClass("logo-size");
        } else {
            nav.removeClass("background-color-scroll");
            img.addClass("logo-size");
            img.removeClass("logo-size-scroll");
        }
    });

});


$(document).ready(function() {
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault (); var target = this.hash,
    $target = $(target); $('html, body').stop().animate ({
        'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
        window.location.hash = target;
    });
    });
});