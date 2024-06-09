document.addEventListener('DOMContentLoaded', () => {
    // Load existing users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || {};


    // Logout button handler
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('loggedInUser');
            window.location.href = 'index.html'; // Redirect to home page
        });
    }

    // Display user section if logged in
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        displayUserSection(loggedInUser);
    }

    // scroll smooot
    
    window.addEventListener('scroll', debounce(function() {
        const header = document.querySelector('header');
        const menuBar = document.querySelector('.menu-bar');
        const scrollPosition = window.scrollY;
    
        if (scrollPosition > header.offsetHeight) {
            header.classList.add('fixed');
            menuBar.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
            menuBar.classList.remove('fixed');
        }
    }, 20));
    
    function debounce(func, wait = 20, immediate = true) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    
    
    const cardWrapper = document.querySelector('.card-wrapper');
    
    function slideLeft() {
        cardWrapper.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    }
    
    function slideRight() {
        cardWrapper.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    }
    
    
    

    // Menu icon handler
    const menuIcon = document.getElementById('menuIcon');
    const sidebar = document.getElementById('sidebar');
    if (menuIcon && sidebar) {
        menuIcon.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }


    // Function to toggle sections
    function toggleSection(sectionId) {
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.toggle('active');
            } else {
                section.classList.remove('active');
            }
        });
    }
    //slide
    window.addEventListener('load', () => {
        const content = document.getElementById('content');
        content.style.transform = 'translateX(0)';
        content.style.opacity = '5';
    });

    // Event listeners for menu buttons
    document.getElementById('toggle-dashboard').addEventListener('click', () => toggleSection('dashboard'));
    document.getElementById('toggle-booking').addEventListener('click', () => toggleSection('booking'));
    document.getElementById('toggle-realtime').addEventListener('click', () => toggleSection('realtime'));
    document.getElementById('toggle-report').addEventListener('click', () => toggleSection('report'));

    function displayUserSection(username) {
        const loginSection = document.getElementById('loginSection');
        const userSection = document.getElementById('userSection');
        const usernameDisplay = document.getElementById('usernameDisplay');
        const menuIcon = document.getElementById('menuIcon');

        if (loginSection && userSection && usernameDisplay && menuIcon) {
            loginSection.style.display = 'none';
            userSection.style.display = 'block';
            usernameDisplay.textContent = username;
            menuIcon.style.display = 'block';
        }
    }
});
