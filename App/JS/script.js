const hamburgerMenu = document.getElementById('hamburger-menu');
const hamburgers = document.querySelectorAll('.hamburger');
const navMenu = document.getElementById('nav-menu');

hamburgerMenu.addEventListener('click', () => {
    hamburgers.forEach((hamburger) => {
        hamburger.classList.toggle('active');
    });
    navMenu.classList.toggle('active');
});