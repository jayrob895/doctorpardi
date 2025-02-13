// Function to toggle the mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Function to load content dynamically
function loadPage(page) {
    if (page === 'index.html') {
        // If loading the home page, reset the content to the default home content
        document.getElementById('content').innerHTML = `
            <div class="hero">
                <div class="hero-text">
                    <img src="https://raw.githubusercontent.com/jayrob895/doctorpardi/refs/heads/main/brandonpardi-1104192947.jpg-YNqNba4k7kTr3Xag.jpeg">
                    <h1>Expert Orthopedic Care</h1>
                    <p>Specializing in mobility, pain relief, and advanced surgical solutions.</p>
                    <a href="#" onclick="loadPage('contact.html')" class="btn">Schedule a Consultation</a>
                </div>
            </div>
            <div class="container">
                <h2>Welcome to Dr. Brandon Pardi's Orthopedic Practice</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Helping patients regain mobility and improve their quality of life with innovative surgical and non-surgical treatments.</p>
            </div>
        `;
    } else {
        // Load other pages dynamically
        fetch(page)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content').innerHTML = data;
            })
            .catch(error => console.error('Error loading page:', error));
    }
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