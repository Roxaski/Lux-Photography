const mainElement = document.querySelector('main');

// event listeners that toggle an active class in order to animate the cards
mainElement.addEventListener('click', (e) => {
    const card = e.target.closest('.card');

    if(card) {
        card.classList.toggle('active');
    };
});

mainElement.addEventListener('keydown', (e) => {
    const card = e.target.closest('.card');

    if(card && e.key === 'Enter') {
        e.preventDefault();
        card.classList.toggle('active');
    };
});