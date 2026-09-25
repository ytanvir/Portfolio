const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themeToggle.textContent = "🌙";
    } else {
        themeToggle.textContent = "☀";
    }

});
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});