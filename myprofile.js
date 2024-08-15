// main.js

function showSection(sectionId, event) {
    if (event) {
        event.preventDefault(); // Prevent default anchor behavior
    }

    // Hide all sections
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';

    // Update the active class in the navigation
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });
    document.querySelector('[onclick="showSection(\'' + sectionId + '\', event)"]').classList.add('active');
}
document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');
    const reviewsContainer = document.getElementById('reviews');

    // Load existing reviews from local storage
    function loadReviews() {
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviewsContainer.innerHTML = reviews.map(review => `
            <div class="review">
                <p><strong>${review.name}</strong> (${review.rating} Sao)</p>
                <p>${review.comments}</p>
            </div>
        `).join('');
    }

    loadReviews();

    // Handle form submission
    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const comments = document.getElementById('comments').value;

        // Create a new review object
        const newReview = {
            name,
            rating,
            comments
        };

        // Save the review to local storage
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push(newReview);
        localStorage.setItem('reviews', JSON.stringify(reviews));

        // Clear the form
        feedbackForm.reset();

        // Reload the reviews
        loadReviews();
    });
});
function showSection(sectionId, event) {
    event.preventDefault();

    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section with a fade-in effect
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = 'block';
    sectionToShow.classList.add('fade-in');
    setTimeout(() => {
        sectionToShow.classList.remove('fade-in');
    }, 1000); // Duration of the fade-in animation
}
