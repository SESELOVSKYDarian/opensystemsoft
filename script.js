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
});
