// For lifting the header 

// Select the header element
const header = document.querySelector('.container'); // Change '.row' to your header's actual class or ID

// Store the initial position of the header
let prevScrollPosition = window.scrollY;

// Add scroll event listener
window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > prevScrollPosition) {
        // Scrolling down - hide the header
        header.style.transform = 'translateY(100%)';
    } else {
        // Scrolling up - show the header
        header.style.transform = 'translateY(0)';
    }

    prevScrollPosition = currentScrollPosition;
});

let currentSlide = 0;

// Select elements
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

// Function to show the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1)  % totalSlides; // Loop back to the first slide
    updateSlider();
}

// Function to show the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Loop back to the last slide
    updateSlider();
}

// Function to update the slider's position
function updateSlider() {
    const slideWidth = document.querySelector('.slide').clientWidth;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Adjust slider when window resizes
window.addEventListener('resize', updateSlider);

//for cleint page

document.querySelector('#Client')
