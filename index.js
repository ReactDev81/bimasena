// mobile menu
$('.menu-open').click(function(){
    $('.mob-menu').addClass('show');
    $('body').css('overflow', 'hidden');
})
$('.menu-close').click(function(){
    $('.mob-menu').removeClass('show');
    $('body').css('overflow', '');
})