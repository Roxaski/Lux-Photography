const nav = document.querySelector('nav');
const links = document.querySelector('.links');
const menu = document.querySelector('.hamburger-menu');
const main = document.querySelector('main');
const hero = document.querySelector('.hero-section');
const mobileHeader = document.querySelector('.mobile-header');

menu.addEventListener('click', toggleHamburgerMenu);

// toggles the hamburger menu, along with disabling scroll when menu is open
function toggleHamburgerMenu() {
    nav.classList.toggle('menu-open');
    document.body.classList.toggle('no-scroll');

    // holds the value of whether the menu is open or not in order for the relevant code to run
    const menuOpen = nav.classList.contains('menu-open');
    
    // if the these elements exists, it prevents them from being focused
    if (main) {
        main.inert = menuOpen;
    };

    if (hero) {
        hero.inert = menuOpen;
    };

    if (mobileHeader) {
        mobileHeader.inert = menuOpen;
    };

    /*
        adds or removes the event listener depending on whether the hamburger is open or not,
        and sets the aria-expanded accordingly for screen reader users
    */
   
    if (menuOpen) {
        document.addEventListener('keydown', escapeKeyPress);
        menu.setAttribute('aria-expanded', 'true');
    } else {
        document.removeEventListener('keydown', escapeKeyPress);
        menu.setAttribute('aria-expanded', 'false');
    };
};

// listens for escape key while the hamburger menu is open
function escapeKeyPress(e) {
    if (e.key === 'Escape') {
        toggleHamburgerMenu();
    };
};