let nav = document.querySelector('nav');
let menu = document.querySelector('.hamburger-menu');

//HAMBURGER MENU
menu.addEventListener('click', () => {
    nav.classList.toggle('active')
});

//NO SCROLL WHEN NAV OPEN
menu.addEventListener('click', () => {
    document.body.classList.toggle('no-scroll');
});