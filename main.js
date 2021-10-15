let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', showNavbar);

function showNavbar (e) {
    console.log("clicked");
    let navbar = document.querySelector('nav');
    navbar.classList.toggle("hidden");
    hamburger.classList.toggle("hamburger-active");
}