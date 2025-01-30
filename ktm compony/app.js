// Get the button
const backToTopBtn = document.getElementById("backToTop");

// Show the button when scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Smooth scroll to top when button is clicked
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
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

//for client images

const scrollToClientLink = document.getElementById('Client');
    
    // Add event listener to the link
    scrollToClientLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior (navigation)
      
      // Smoothly scroll to the client section
      document.querySelector('.forcleint').scrollIntoView({ behavior: 'smooth' });
    });

    // Check if the page is loaded with a hash in the URL
    if (window.location.hash === "#forcleint") {
      // If the page is loaded with the #client hash, scroll to the section smoothly
      document.querySelector('.forcleint').scrollIntoView({ behavior: 'smooth' });
    }