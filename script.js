const nav = document.querySelector('nav');
const links = document.querySelector('.links');
const menu = document.querySelector('.hamburger-menu');
const main = document.querySelector('main');
const hero = document.querySelector('.hero-section');
const mobileHeader = document.querySelector('.mobile-header');

menu.addEventListener('click', toggleHamburgerMenu);
// toggles the hamburger menu, along with disabling scroll when menu is open
function toggleHamburgerMenu() {
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    document.body.classList.toggle('no-scroll');
    // prevents these elements from being focused, clicked, or read by screen readers
    hero.inert = active;
    main.inert = active;

    // if the this element exists, and if it does it prevents it from being focused 
    if (mobileHeader) {
        mobileHeader.inert = active;
    };

    if (active) {
        document.addEventListener('keydown', escapeKeyPress);
    } else {
        document.removeEventListener('keydown', escapeKeyPress);
        menu.focus();
    };
};

function escapeKeyPress(e) {
    if (e.key === 'Escape') {
        toggleHamburgerMenu();
    };
};