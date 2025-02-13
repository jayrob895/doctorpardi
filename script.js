document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile menu
    document.querySelector('.hamburger').addEventListener('click', () => {
        document.getElementById('navLinks').classList.toggle('active');
    });

    // Load page content dynamically
    function loadPage(page) {
        fetch(`pages/${page}.html`)
            .then(response => {
                if (!response.ok) throw new Error(`Page ${page} not found`);
                return response.text();
            })
            .then(html => {
                document.getElementById('content').innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading page:', error);
                document.getElementById('content').innerHTML = `<p>Sorry, the page could not be loaded.</p>`;
            });
    }

    // Add event listeners to navbar links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.getAttribute('data-page');
            loadPage(page);
            window.history.pushState({ page }, '', `#${page}`);
        });
    });

    // Load the home page by default
    loadPage('home');

    // Handle browser navigation
    window.addEventListener('popstate', event => {
        if (event.state && event.state.page) {
            loadPage(event.state.page);
        }
    });
});