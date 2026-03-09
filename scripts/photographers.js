const contentWrapper = document.querySelector('.content-wrapper');
let animationIsPlaying;

/*
    lets you open the photographer cards with either a click or the enter or space keys,
    by toggling and active class and checking if the animation is playing or not and adding a 250ms timeout
*/

contentWrapper.addEventListener('click', (e) => {
    if(animationIsPlaying) {
        return;
    };

    const card = e.target.closest('.card');

    if(card) {
        animationIsPlaying = true;
        card.classList.toggle('active');
        setTimeout(() => {
            animationIsPlaying = false;
        }, 250);
    };
});

contentWrapper.addEventListener('keydown', (e) => {
    if(animationIsPlaying) {
        return;
    };

    const card = e.target.closest('.card');

    if(card && e.key === 'Enter' || card && e.key === ' ') {
        e.preventDefault();
        animationIsPlaying = true;
        card.classList.toggle('active');
        setTimeout(() => {
            animationIsPlaying = false;
        }, 250);
    };
});