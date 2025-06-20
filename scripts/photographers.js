const photographerCard = document.querySelectorAll('.card');

// loops through each photographer card, adding an active class when clicked
photographerCard.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });

    // opens the photographer cards when pressing the enter key
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            card.classList.toggle('active');
        }
    });
});