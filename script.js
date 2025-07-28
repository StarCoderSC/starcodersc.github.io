const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navlinks");
const navbar = document.querySelector(".navbar");

// Toggle nav menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("nav-links-active");
});

// Auto-close nav on link click (mobile)
document.querySelectorAll(".nav-links a").forEach(link =>
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("nav-links-active")) {
      navLinks.classList.remove("nav-links-active");
      hamburger.classList.remove("active");
    }
  })
);

// Add scroll shadow
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
