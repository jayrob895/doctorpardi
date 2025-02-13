// script.js - Fixed Version for Single Page Navigation

document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Function to load content dynamically
    function loadPage(page) {
        fetch(`pages/${page}.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Page not found');
                }
                return response.text();
            })
            .then(html => {
                document.getElementById('content').innerHTML = html;
            })
            .catch(error => {
                document.getElementById('content').innerHTML = `<p>Sorry, the page could not be loaded.</p>`;
                console.error(error);
            });
    }

    // Add event listeners to navbar links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.getAttribute('data-page');
            loadPage(page);
            window.location.hash = page;
        });
    });

    // Load page based on URL hash or default to 'index'
    const initialPage = window.location.hash.replace('#', '') || 'index';
    loadPage(initialPage);

    window.addEventListener('hashchange', () => {
        const newPage = window.location.hash.replace('#', '') || 'index';
        loadPage(newPage);
    });
});
