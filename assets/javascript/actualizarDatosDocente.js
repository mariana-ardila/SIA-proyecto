import { expresiones } from "./expresiones.js";

//Subir foto

document.addEventListener("DOMContentLoaded", () => {
  const inputFoto = document.getElementById("fotoInput");
  const imagen = document.getElementById("fotoUsuario");

  inputFoto.addEventListener("change", (event) => {
    const archivo = event.target.files[0];
    if (archivo) {
      // Verificar que sea una imagen
      if (!archivo.type.startsWith("image/")) {
        alert("Por favor selecciona un archivo de imagen válido.");
        return;
      }

      // Crear una URL temporal para mostrar la imagen
      const lector = new FileReader();
      lector.onload = function(e) {
        imagen.src = e.target.result; // Actualiza la imagen mostrada
      };
      lector.readAsDataURL(archivo);
    }
  });
});

//Actualizar datos

let formulario=document.getElementById("form");
let inputs = formulario.querySelectorAll("input");


  inputs.forEach(input=>input.addEventListener("input", () => {
        validarCampo(input);
      }))


formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const datos = Object.fromEntries(new FormData(formulario));
  console.log("Los datos actualizados son: " + JSON.stringify(datos, null, 2)); // ← convierte a JSON con formato
  alert("¡Datos actualizados correctamente!");
});





    function validarCampo(input){

        const validarData=expresiones[input.id];

        if(validarData && validarData.test(input.value)){
            input.classList.add("valido")
            input.classList.remove("invalido")
        }else{
            input.classList.add("invalido")
            input.classList.remove("valido")
        }

    }