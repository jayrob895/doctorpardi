// Function to load content dynamically
function loadPage(page) {
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => console.error('Error loading page:', error));
}

// Event listener for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        const page = e.target.getAttribute('data-page');
        loadPage(page);
    });
});

// Load the home page by default
loadPage('index');