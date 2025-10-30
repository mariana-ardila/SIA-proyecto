document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll('input[type="number"]');
  const button = document.getElementById("button");

  // Escuchar cambios en todos los inputs numéricos
  inputs.forEach(input => {
    input.addEventListener("input", () => {
      const valor = parseFloat(input.value);

      // Validación de rango
      if (!isNaN(valor) && valor >= 0 && valor <= 5) {
        input.classList.remove("error");
        input.classList.add("correcto");
      } else {
        input.classList.remove("correcto");
        input.classList.add("error");
      }

      // Recalcular el promedio solo de la fila del input modificado
      const fila = input.closest("tr");
      calcularPromedioFila(fila);
    });
  });

  // Función que calcula el promedio de una fila específica
  function calcularPromedioFila(fila) {
    const notasInputs = fila.querySelectorAll('input[type="number"]:not([readonly])');
    let suma = 0;
    let cantidad = 0;

    notasInputs.forEach(input => {
      const valor = parseFloat(input.value);
      if (!isNaN(valor) && valor >= 0 && valor <= 5) {
        suma += valor;
        cantidad++;
      }
    });

    const promedioInput = fila.querySelector('input[readonly]');
    const promedio = cantidad > 0 ? (suma / cantidad).toFixed(2) : "";
    promedioInput.value = promedio;
  }

  // Cuando se hace clic en el botón, obtener los datos de todos los estudiantes
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const filas = document.querySelectorAll("tbody tr");
    const estudiantes = [];

    filas.forEach(fila => {
      const id = fila.cells[1].textContent.trim();
      const nombre = fila.cells[2].textContent.trim();

      const notas = {};
      fila.querySelectorAll('input[type="number"]:not([readonly])').forEach(input => {
        notas[input.name] = input.value ? parseFloat(input.value) : null;
      });

      const promedio = fila.querySelector('input[readonly]').value;

      estudiantes.push({
        id,
        nombre,
        notas,
        promedio: promedio ? parseFloat(promedio) : null
      });
    });

    console.log(JSON.stringify(estudiantes, null, 2));
  });
});