const menu = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const readMore = document.querySelector('.btn')
const showMore = document.querySelector('.intro__more-info')

menu.addEventListener('click', () => {
    menu.classList.toggle('hamburger--active');
    nav.classList.toggle('slider');
});

readMore.addEventListener('click', () =>{
    showMore.classList.toggle('show-more')
});

