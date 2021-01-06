window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        close = document.querySelector('.menu_close');

        hamburger.addEventListener('click', () => {
            menu.classList.add('menu-active'); //Подразумевается, что адд работает с классами
        });

        close.addEventListener('click', () => {
            menu.classList.remove('menu-active'); //Подразумевается, что адд работает с классами
        });
});