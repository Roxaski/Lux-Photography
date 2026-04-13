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
    
     // if the these elements exists, it prevents them from being focused
    if (hero) {
        hero.inert = active;
    };

    if (main) {
        main.inert = active;
    };

    if (mobileHeader) {
        mobileHeader.inert = active;
    };

    // adds or removes the esc key event listener when the hamburger menu is open or closed
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