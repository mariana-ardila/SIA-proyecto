import { expresiones } from "./expresiones.js";

let formulario=document.getElementById("form");
let inputs = formulario.querySelectorAll("input");


  inputs.forEach(input=>input.addEventListener("input", () => {
        validarCampo(input);
      }))


formulario.addEventListener("submit", (e) => {
      e.preventDefault();

      const datos = Object.fromEntries(new FormData(formulario));
      console.log(datos);
      alert("¡Datos actualizados correctamente!")
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