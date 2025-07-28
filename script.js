const hamburger = document.getElemenetbyId("hamburger");
const navLinks = document.getElementById("navlinks");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
})

// Close menu when link is clicked (on mobile)
document.querySelectorAll(".nav-links a").forEach(link =>
    link.addEventListener("click", () => {
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
            hamburger.classList.remove("active");
        }
    })
);

// Add Shadow on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});

