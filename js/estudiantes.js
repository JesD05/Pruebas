// Cargar estudiantes al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  listarEstudiantes();
});

// Manejo del formulario de búsqueda
document
  .getElementById("formBuscarEstudiante")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    buscarEstudiantes();
  });

// Función para cargar estudiantes
function listarEstudiantes() {
  fetch("../../controllers/EstudianteController.php?action=listarEstudiantes") // Ajusta la ruta si es necesario
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Asegúrate de que los datos se están recibiendo
      actualizarTablaEstudiantes(data);
    })
    .catch((error) => console.error("Error al cargar estudiantes:", error));
}

// Función para buscar estudiantes
function buscarEstudiantes() {
  const filtro = document.getElementById("filtro").value;
  const busqueda = document.getElementById("busqueda").value;

  fetch(
    `../../controllers/EstudianteController.php?action=buscarEstudiantes&filtro=${filtro}&busqueda=${busqueda}`
  )
    .then((response) => response.json())
    .then((data) => {
      actualizarTablaEstudiantes(data);
    })
    .catch((error) => console.error("Error al buscar estudiantes:", error));
}

// Actualizar la tabla de estudiantes
function actualizarTablaEstudiantes(estudiantes) {
  const tbody = document
    .getElementById("tablaEstudiantes")
    .querySelector("tbody");
  tbody.innerHTML = ""; // Limpiar tabla

  // Si no hay estudiantes, muestra un mensaje
  if (estudiantes.length === 0) {
    tbody.innerHTML =
      "<tr><td colspan='6'>No se encontraron estudiantes.</td></tr>";
    return;
  }

  // Recorrer los estudiantes y agregarlos a la tabla
  estudiantes.forEach((est) => {
    const fila = `
            <tr>
                <td>${est.estudiante_id}</td>
                <td>${est.nombre}</td>
                <td>${est.apellido}</td>
                <td>${est.email}</td>
                <td>${est.telefono}</td>
                <td>
                    <a href="editar.php?id=${est.estudiante_id}">Editar</a>
                    <button onclick="eliminarEstudiante(${est.estudiante_id})">Eliminar</button>
                </td>
            </tr>`;
    tbody.innerHTML += fila;
  });
}

// Función para eliminar estudiante
function eliminarEstudiante(id) {
  if (confirm("¿Estás seguro de eliminar este estudiante?")) {
    fetch(
      `../../controllers/EstudianteController.php?action=eliminarEstudiante&id=${id}`,
      {
        method: "POST",
      }
    )
      .then((response) => response.text())
      .then((data) => {
        alert(data);
        listarEstudiantes(); // Recargar la lista
      })
      .catch((error) => console.error("Error al eliminar estudiante:", error));
  }
}
