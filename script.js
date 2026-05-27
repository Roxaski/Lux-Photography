const nav = document.querySelector('nav');
const links = document.querySelector('.links');
const menu = document.querySelector('.hamburger-menu');
const main = document.querySelector('main');
const hero = document.querySelector('.hero-section');
const mobileHeader = document.querySelector('.mobile-header');

menu.addEventListener('click', toggleHamburgerMenu);

// toggles the hamburger menu, along with disabling scroll when menu is open
function toggleHamburgerMenu() {
    const menuOpen = nav.classList.contains('menu-open');

    nav.classList.toggle('menu-open');
    document.body.classList.toggle('no-scroll');
    
     // if the these elements exists, it prevents them from being focused
     if (main) {
        main.inert = !menuOpen;
    };

    if (hero) {
        hero.inert = !menuOpen;
    };

    if (mobileHeader) {
        mobileHeader.inert = !menuOpen;
    };

    // adds or removes the esc key event listener when the hamburger menu is open or closed
    if (menuOpen) {
        document.addEventListener('keydown', escapeKeyPress);
    } else {
        document.removeEventListener('keydown', escapeKeyPress);
    };
};

// listens for escape key while the hamburger menu is open
function escapeKeyPress(e) {
    if (e.key === 'Escape') {
        toggleHamburgerMenu();
    };
};