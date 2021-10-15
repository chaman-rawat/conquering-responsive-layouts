let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', showNavbar);

function showNavbar (e) {
    console.log("clicked");
    let navbar = document.querySelector('nav');
    console.log(navbar.classList.toggle("hidden"));
}