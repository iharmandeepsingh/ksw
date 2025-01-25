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

