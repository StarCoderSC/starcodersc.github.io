const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navbar = document.querySelector(".navbar");

// Toggle nav menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("naLinks-active");
});

// Auto-close nav on link click (mobile)
document.querySelectorAll("navLinks-active a").forEach(link =>
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("navLinks-active")) {
      navLinks.classList.remove("navLinks-active");
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

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});
