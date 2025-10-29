/*
    closest() searches up from the clicked element to find the nearest parent with class of card,
    the reason for this is that it allows to click anywhere on the card to toggle the active class
*/

// expands the  photographer cards when clicking on it
document.querySelector('.content-wrapper').addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (card) {
        card.classList.toggle('active');
    };
});

// expands the  photographer cards using the enter key for better accessibility
document.querySelector('.content-wrapper').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const card = e.target.closest('.card');
        if (card) {
            card.classList.toggle('active');
        };
    };
});