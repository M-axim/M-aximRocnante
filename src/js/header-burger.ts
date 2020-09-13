jQuery(document).ready(function () {
    jQuery('.menu__icon').click(function (event) {
        jQuery('.menu__icon, .menu__body, .header').toggleClass('active');
        jQuery('body').toggleClass('lock');
    });
});

const menuBG = document.querySelector('.header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset;
    if (scrollTop >= 125) {
        menuBG.classList.add('bg');
    } else {
        menuBG.classList.remove('bg')
    }
});