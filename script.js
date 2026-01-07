document.addEventListener("DOMContentLoaded", () => {
  // Año dinámico en footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Scroll suave con data-scroll-to
  document.querySelectorAll("[data-scroll-to]").forEach((el) => {
    el.addEventListener("click", () => {
      const targetId = el.getAttribute("data-scroll-to");
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Formulario (demo)
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Gracias por tu mensaje. Dante se pondrá en contacto.");
      form.reset();
    });
  }

  // Toggle modal de registro
  const signupTrigger = document.getElementById("signup-trigger");
  const signupModal = document.getElementById("signup-modal");
  const signupCloseButtons = document.querySelectorAll("[data-signup-close]");

  const closeSignupModal = () => {
    if (!signupModal) return;
    signupModal.classList.add("hidden");
    signupModal.classList.remove("flex");
    signupModal.setAttribute("aria-hidden", "true");
  };

  const openSignupModal = () => {
    if (!signupModal) return;
    signupModal.classList.remove("hidden");
    signupModal.classList.add("flex");
    signupModal.setAttribute("aria-hidden", "false");
  };

  if (signupTrigger) {
    signupTrigger.addEventListener("click", openSignupModal);
  }

  signupCloseButtons.forEach((button) => {
    button.addEventListener("click", closeSignupModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSignupModal();
    }
  });
});
