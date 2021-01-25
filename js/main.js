const menu = document.querySelector('.hamburger');
const nav = document.querySelector('.sidebar');
const readMore = document.querySelector('.btn');
const showMore = document.querySelector('.intro__more-info');
const menuLink = document.querySelectorAll('.menu__link');

menu.addEventListener('click', () => {
    menu.classList.toggle('hamburger--active');
    nav.classList.toggle('change');
});

menuLink.forEach(el => el.addEventListener('click', function () {
    nav.classList.remove('change')
    menu.classList.toggle('hamburger--active');
}))

readMore.addEventListener('click', () => {
    showMore.classList.toggle('show-more');
});


$('div[data-scroll]').click(function (e) {
    e.preventDefault();
    var offset = 10;
    var target = ('#' + $(this).data('scroll'));
    var $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - offset
    }, 0, 'swing');
}); 