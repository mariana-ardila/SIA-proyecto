import { expresiones } from "./expresiones.js";

let inputs = document.getElementsByClassName("formulario-registro");
let arregloInputs = [...inputs]

arregloInputs.map((input)=> {
    input.addEventListener("keyup", (e)=>{
        switch(e.target.name){
            case "nombre":
                if(expresiones.nombre.test(e.target.value)){
                    e.target.classList.add("input-correcto")
                    e.target.classList.remove("input-error")
                } else{
                    e.target.classList.add("input-error")
                    e.target.classList.remove("input-correcto")
                }
                break;
            case "correo":
                if(expresiones.correo.test(e.target.value)){
                    e.target.classList.add("input-correcto")
                    e.target.classList.remove("input-error")
                } else{
                    e.target.classList.add("input-error")
                    e.target.classList.remove("input-correcto")
                }
                break;
            case "telefono":
                if(expresiones.telefono.test(e.target.value)){
                    e.target.classList.add("input-correcto")
                    e.target.classList.remove("input-error")
                } else{
                    e.target.classList.add("input-error")
                    e.target.classList.remove("input-correcto")
                }
                break;
            case "direccion":
                if(expresiones.direccion.test(e.target.value)){
                    e.target.classList.add("input-correcto")
                    e.target.classList.remove("input-error")
                } else{
                    e.target.classList.add("input-error")
                    e.target.classList.remove("input-correcto")
                }
                break;
            case "especializaciones":
                if(expresiones.texto.test(e.target.value)){
                    e.target.classList.add("input-correcto")
                    e.target.classList.remove("input-error")
                } else{
                    e.target.classList.add("input-error")
                    e.target.classList.remove("input-correcto")
                }
                break;
            case "usuario":
                if(expresiones.nombre.test(e.target.value)){
                    e.target.classList.add("input-correcto")
                    e.target.classList.remove("input-error")
                } else{
                    e.target.classList.add("input-error")
                    e.target.classList.remove("input-correcto")
                }
                break;
            case "password":
                if(expresiones.password.test(e.target.value)){
                    e.target.classList.add("input-correcto")
                    e.target.classList.remove("input-error")
                } else{
                    e.target.classList.add("input-error")
                    e.target.classList.remove("input-correcto")
                }
                break;
            case "confirmar":
                if(expresiones.password.test(e.target.value)){
                    e.target.classList.add("input-correcto")
                    e.target.classList.remove("input-error")
                } else{
                    e.target.classList.add("input-error")
                    e.target.classList.remove("input-correcto")
                }
                break;
        }
    })
})