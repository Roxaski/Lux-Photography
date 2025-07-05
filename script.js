let nav = document.querySelector('nav');
let menu = document.querySelector('.hamburger-menu');

// toggles the hamburger menu
menu.addEventListener('click', () => {
    nav.classList.toggle('active')
});

// disables scrolling when the hamburger menu is active
menu.addEventListener('click', () => {
    document.body.classList.toggle('no-scroll');
});