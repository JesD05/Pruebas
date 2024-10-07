document.getElementById("buscar").addEventListener("input", function () {
  let termino = this.value;
  if (termino.length > 2) {
    fetch("?route=buscarUsuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "termino_busqueda=" + encodeURIComponent(termino),
    })
      .then((response) => response.json())
      .then((data) => {
        let resultadosDiv = document.getElementById("resultados");
        resultadosDiv.innerHTML = "";
        data.forEach((usuario) => {
          resultadosDiv.innerHTML += `
                    <p>${usuario.username} - ${usuario.nombres} ${usuario.apellidos} - DNI: ${usuario.dni}</p>
                `;
        });
      });
  }
});
