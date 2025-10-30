import { expresiones } from "./expresiones.js";

// Espera que el HTML cargue completamente

document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todos los inputs dentro de la tabla
    const inputs = document.querySelectorAll(".container-table__table input[type='number']");

    // Recorre todos los inputs
    inputs.forEach(input => {
        // Escucha el evento "input" (cuando el usuario escribe o cambia el valor)
        input.addEventListener("input", (evento) => {
            const valor = evento.target.value;
            const id = evento.target.id;
            console.log(`El input ${id} cambió a: ${valor}`);
        });
    });
});

const mensaje = document.getElementById("mensaje");
const asignatura = document.getElementById("asignatura");
const grupo = document.getElementById("group");
const periodo = document.getElementById("time");

asignatura.addEventListener("change", () => {
    console.log("Asignatura seleccionada:", asignatura.value);
    mensaje.innerText="Materia seleccionada: " + asignatura.value ;
});

grupo.addEventListener("change", () => {
    console.log("Grupo seleccionado:", grupo.value);
});

periodo.addEventListener("change", () => {
    console.log("Periodo seleccionado:", periodo.value);
});


input.addEventListener("input", (evento) => {
    const valor = evento.target.value;
    const id = evento.target.id;
    localStorage.setItem(id, valor);
});
