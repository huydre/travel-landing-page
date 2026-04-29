// Seashi — interactive bits
// Keep this file lean; the page is mostly static.

(() => {
  // --- Footer year ---
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // --- Mobile menu toggle ---
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
    mobileMenu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => mobileMenu.classList.add("hidden")),
    );
  }

  // --- "How we work" step switcher ---
  const steps = document.querySelectorAll(".step-item");
  steps.forEach((step) => {
    step.addEventListener("click", () => {
      steps.forEach((s) => s.classList.remove("step-item--active"));
      step.classList.add("step-item--active");
    });
  });

  // --- Single-open FAQ ---
  const faqs = document.querySelectorAll(".faq-item");
  faqs.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (item.open) {
        faqs.forEach((other) => {
          if (other !== item) other.removeAttribute("open");
        });
      }
    });
  });
})();
