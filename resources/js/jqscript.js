$(document).ready(function() {
    /*scroll to next section*/
    $('.js--scroll-to-next').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-next').offset().top}, 1000);
    });
});