// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".custom-navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(15, 15, 35, 0.95)";
  } else {
    navbar.style.background = "rgba(15, 15, 35, 0.8)";
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
    }
  });
}, observerOptions);

// Observe all animated elements
document
  .querySelectorAll(".animate-fade-in, .animate-slide-up")
  .forEach((el) => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });

// Button hover effects
document.querySelectorAll(".btn-hero, .btn-glow").forEach((button) => {
  button.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)";
  });

  button.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
});

// Mobile menu auto-close
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      bootstrap.Collapse.getInstance(navbarCollapse).hide();
    }
  });
});

// Add loading animation delay for staggered effects
window.addEventListener("load", function () {
  const animatedElements = document.querySelectorAll(".animate-fade-in");
  animatedElements.forEach((el, index) => {
    setTimeout(() => {
      el.style.animationDelay = `${index * 0.1}s`;
    }, 100);
  });
});
