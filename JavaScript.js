// Toggle mobile menu
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// Load content dynamically
function loadPage(page) {
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => console.error('Error loading page:', error));
}

// Add event listeners to navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = e.target.getAttribute('data-page');
        loadPage(page);
    });
});

// Load the home page by default
loadPage('index');
// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Add event listener to the hamburger menu
document.querySelector('.hamburger').addEventListener('click', toggleMenu);