document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const items = document.querySelectorAll(".carousel-item");
  const dots = document.querySelectorAll(".dot");

  function showSlide(index) {
    // Asegúrate de eliminar 'is-active' de todos los items y puntos
    items.forEach((item, i) => {
      item.classList.toggle("is-active", i === index);
      dots[i].classList.toggle("is-active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
  }

  // Evento para cambiar al hacer click en los puntos
  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      currentIndex = parseInt(this.dataset.index, 10);
      showSlide(currentIndex);
    });
  });

  // Cambiar la imagen cada 5 segundos
  setInterval(nextSlide, 5000);

  // Ajustar el hero al tamaño del header dinámicamente
  const header = document.querySelector("nav");
  const hero = document.querySelector(".hero");

  function adjustHeroHeight() {
    const headerHeight = header.offsetHeight;
    hero.style.height = `calc(100vh - ${headerHeight}px)`;
  }

  // Llamar a la función una vez cargado el DOM y al redimensionar la ventana
  adjustHeroHeight();
  window.addEventListener("resize", adjustHeroHeight);
});
