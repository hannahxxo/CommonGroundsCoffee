let menuToggler = document.querySelector(".nav_button");
let navLinks = document.querySelectorAll(".nav-link");
let body = document.querySelector("body");

menuToggler.addEventListener("click", () => {
    body.classList.toggle("open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        body.classList.toggle("open");
    });
});