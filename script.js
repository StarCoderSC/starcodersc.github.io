const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navbar = document.querySelector(".navbar");

// Toggle nav menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("nav-links-active");
});

// Auto-close nav on link click (mobile)
document.querySelectorAll("#navLinks a").forEach(link =>
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

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 200); //200ms delay between cards

      cardObserve.unobserve(entry.target); // Stop observing once revealed
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll(".project-card").forEach(card => {
  cardObserver.observe(card);
});
