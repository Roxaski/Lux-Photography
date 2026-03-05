const gallery = document.querySelector('.gallery');
const galleryImgs = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox img');
const lightboxSizes = '(max-width: 725px) 90vw, 600px';
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const overlay = document.querySelector('.overlay');

// stores the index of the currently displayed image
let currentImage;

// listens out for a click on the gallery
gallery.addEventListener('click', (e) => {
    // check if the click is on a gallery image
    if (e.target.tagName === 'IMG') {
        // checks which image was clicked from the array of gallery images
        currentImage = Array.from(galleryImgs).indexOf(e.target);

        displayOverlay();
        imagePreview();
        preload(currentImage + 1);
        preload(currentImage - 1);
    };
});

// listens out for the enter key on the gallery
gallery.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.tagName === 'IMG') {
        currentImage = Array.from(galleryImgs).indexOf(e.target);

        displayOverlay();
        imagePreview();
        preload(currentImage + 1);
        preload(currentImage - 1);
    };
});

// preloads the previous and next image
function preload(imageIndex) {
    // checks if the image is within the length of the gallery 
    if (imageIndex >= 0 && imageIndex < galleryImgs.length) {
        const img = galleryImgs[imageIndex];
        const preloadImg = new Image();

        // sets the image src, srcset and size for the browser to preload
        preloadImg.srcset = img.srcset;
        preloadImg.sizes = lightboxSizes;
        preloadImg.src = img.src;
    };
};

// displays an overlay
function displayOverlay() {
    document.body.style.overflow = 'hidden';
    overlay.classList.add('active');
};

// displays image & buttons
function imagePreview() {
    lightbox.classList.add('active');

    // lightbox should use more appropriate image sizes
    lightbox.srcset = galleryImgs[currentImage].srcset;
    lightbox.sizes = lightboxSizes;
    lightbox.alt = galleryImgs[currentImage].alt;

    // fallback in case srcset and sizes isn't supported on the browser
    lightbox.src = galleryImgs[currentImage].src;

    displayGalleryBtns();
};

// removes the buttons from the first and last lightbox images
function displayGalleryBtns() {
    if(currentImage == 0) {
        previousBtn.classList.remove('visible');
    } else {
        previousBtn.classList.add('visible');
    };

    if(currentImage == galleryImgs.length - 1) {
        nextBtn.classList.remove('visible');
    } else {
        nextBtn.classList.add('visible');
    };
};

// displays next image
nextBtn.addEventListener('click', () => {
    currentImage ++;
    imagePreview();
    preload(currentImage +1);
});

// displays previous image
previousBtn.addEventListener('click', () => {
    currentImage --;
    imagePreview();
    preload(currentImage - 1);
});

// removes overlay, image buttons, src and srcset along with alt
function closeOverlay() {
    document.body.style.overflow = 'auto';
    lightbox.src = '';
    lightbox.srcset = '';
    lightbox.alt = '';
    lightbox.classList.remove('active');
    overlay.classList.remove('active');
    nextBtn.classList.remove('visible');
    previousBtn.classList.remove('visible');
};

// closes the overlay
overlay.addEventListener('click', () => {
    closeOverlay();
});

// stores the value of where the finger touches the screen
let touchStart;

lightbox.addEventListener('touchstart', (e) => {
    // stops the default event from happening (swiping from the edge of the screen makes the page go back)
    e.preventDefault();
    
    // returns the location of where the touch started on the X-axis
    touchStart = e.touches[0].clientX;
});

//  stores the value of when the finger stops on the screen
let touchEnd;

lightbox.addEventListener('touchend', (e) => {
    // returns the location of where touch ended on the X-axis
    touchEnd = e.changedTouches[0].clientX;

    // defines the minimum distance needed to swipe for next and previous images
    const minSwipe = 100;
    // calculates the value to show the next or previous image
    const swipeToChangeImg = touchStart - touchEnd;

    // if you swipe to the left and aren't on the last image, then it displays the next image
    if(swipeToChangeImg > minSwipe && currentImage < galleryImgs.length - 1) {
        currentImage ++;
        imagePreview();
        preload(currentImage + 1);
    // else if you swipe to the right and aren't on the first image, then it displays the previous image
    } else if (swipeToChangeImg < -minSwipe && currentImage > 0) {
        currentImage --;
        imagePreview();
        preload(currentImage - 1);
    };
});

// image navigation using the arrows keys
window.addEventListener('keydown', (e) => {
    if(overlay.classList.contains('active') && e.key == 'ArrowRight' &&  currentImage < filteredGallery.length - 1) {
        currentImage ++;
        imagePreview();
        preload(currentImage +1);

    } else if (overlay.classList.contains('active') && e.key == 'ArrowLeft' && currentImage > 0) {
        currentImage --;
        imagePreview();
        preload(currentImage -1);

    } else if (e.key == 'Escape') {
        closeOverlay();
    };
});