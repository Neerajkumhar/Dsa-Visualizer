// main.js

// Function to toggle more reviews visibility
function toggleMoreReviews() {
    const moreReviews = document.querySelectorAll('.extra-review');
    moreReviews.forEach(review => {
        review.classList.toggle('visible');
    });

    const toggleButton = document.getElementById('toggle-reviews-btn');
    if (toggleButton.innerText === 'Show More Reviews') {
        toggleButton.innerText = 'Show Less Reviews';
    } else {
        toggleButton.innerText = 'Show More Reviews';
    }
}

// Add event listener for the "Show More Reviews" button if it exists
const toggleButton = document.getElementById('toggle-reviews-btn');
if (toggleButton) {
    toggleButton.addEventListener('click', toggleMoreReviews);
}

// Function for smooth scrolling to sections
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add smooth scroll to navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = link.getAttribute('href');
        smoothScroll(targetSection);
    });
});

// Simple form validation for adding teacher reviews (if a form exists)
function validateReviewForm(event) {
    const nameField = document.getElementById('teacher-name');
    const reviewField = document.getElementById('review-text');
    const ratingField = document.getElementById('review-rating');

    if (!nameField.value || !reviewField.value || !ratingField.value) {
        event.preventDefault();
        alert('Please fill out all fields before submitting the review.');
    }
}

const reviewForm = document.getElementById('review-form');
if (reviewForm) {
    reviewForm.addEventListener('submit', validateReviewForm);
}

// Additional JS for any other future functionalities can be added here


