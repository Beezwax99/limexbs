
//header menu
const menu = $('.mob'),
burger = $('.burger');
burger.on('click', function (e) {
e.preventDefault();
if ( $(this).hasClass('active') ) {
    menu.removeClass('active')
    $('body').removeClass('no-scroll');
    $('html').removeClass('no-scroll');
    setTimeout(() => {
        $('.header').removeClass('active');
        $('.header').removeClass('header--scroll');
    }, 400);
    }  else {
        menu.addClass('active')
        $('body').addClass('no-scroll');
        $('html').addClass('no-scroll');
        $('.header').addClass('active');
        $('.header').removeClass('header--scroll');
    }
}); 
$('.close').on('click', function (e) {
    e.preventDefault();
    menu.removeClass('active')
    
    $('body').removeClass('no-scroll');
    $('html').removeClass('no-scroll');
    setTimeout(() => {
        $('.header').removeClass('active');
        $('.header').removeClass('header--scroll');
    }, 400);
});