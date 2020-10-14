$(document).ready(function() {
    /*scroll to next section*/
    $('.js--scroll-to-next').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-next').offset().top - 56}, 500);
    });

    $('.js--scroll-to-boxes').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-next').offset().top - 56}, 500);
    });

    /* Scrolling navbar effect */
    $(window).scroll(function(){
        $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 100);
    });
});