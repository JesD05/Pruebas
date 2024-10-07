document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated");
        entry.target.classList.add(entry.target.dataset.animation);
        observer.unobserve(entry.target); // Dejar de observar una vez animado
      }
    });
  });

  // Seleccionar los elementos que queremos animar al entrar en vista
  const elementsToAnimate = document.querySelectorAll("[data-animation]");
  elementsToAnimate.forEach((el) => observer.observe(el));
});
