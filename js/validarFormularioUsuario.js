document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector("form");

  formulario.addEventListener("submit", function (event) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const dni = document.getElementById("dni").value;

    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    const passwordRegex = /^[a-zA-Z0-9$@.-]{7,100}$/;
    const dniRegex = /^\d{8}$/; // DNI de 8 dígitos

    if (!usernameRegex.test(username)) {
      alert(
        "El nombre de usuario debe tener entre 3 y 20 caracteres y puede incluir subguiones."
      );
      event.preventDefault();
    }

    if (!passwordRegex.test(password)) {
      alert(
        "La contraseña debe tener entre 7 y 100 caracteres, y puede incluir letras, números y los símbolos $@.-."
      );
      event.preventDefault();
    }

    if (!nombres.trim() || !apellidos.trim()) {
      alert("Los nombres y apellidos son obligatorios.");
      event.preventDefault();
    }

    if (!dniRegex.test(dni)) {
      alert("El DNI debe ser un número de 8 dígitos.");
      event.preventDefault();
    }
  });
});
