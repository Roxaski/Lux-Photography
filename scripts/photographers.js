const contentWrapper = document.querySelector('.content-wrapper');
let cardAnimation = false;

/*
    toggles the cards content with a timeout, 
    to prevent rapid toggling during animations transitions
*/
function toggleCard(card) {
    if (!card || cardAnimation) return;
    
    cardAnimation = true;
    card.classList.toggle('active');
    
    setTimeout(() => {
        cardAnimation = false;
    }, 250);
};

// toggles card content with a click
document.querySelector('.content-wrapper').addEventListener('click', e => {
  const card = e.target.closest('.card');
    if (!card) return;
    card.classList.toggle('active');
});

// toggles card content with enter key for accessibility
document.querySelector('.content-wrapper').addEventListener('keydown', e => {
  const card = e.target.closest('.card');
  if (!card) return;
  card.classList.toggle('active');
});