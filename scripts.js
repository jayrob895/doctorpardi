// Function to toggle the mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Function to load content dynamically
function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            // Update the content section with the fetched HTML
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading page:', error));
}

// Add event listeners to navigation links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            const page = this.getAttribute('href'); // Get the href attribute
            loadPage(page); // Load the page dynamically
        });
    });
});