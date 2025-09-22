function mostrarMenu() {
  console.clear();
  let opcion = prompt(
    "Bienvenido a sia\n" +
    "Seleccione una opción:\n" +
    "1. Registro de usuario\n" +
    "2. Inicio de sesión\n" +
    "3. Olvidé mi contraseña\n" +
    "4. cerrar sesión\n" +
    "\nIngrese el número de la opción:"
  );
  if (opcion === "1") {
    registro();
  } else if (opcion === "2") {
    login();
  } else if (opcion === "3") {
    recuperarContrasena();
  } else if (opcion === "4") {
    cerrarSesion(); 
  } else {
    alert("Opción no válida. Intente de nuevo.");
    mostrarMenu();
  }
}

import { expresiones } from './expresiones.js';

let inputemail = document.getElementsByClassName("input");
let arregloInputs = [...inputs];

arregloInputs.map((input) =>  {
  input.addEventListener('keyup', (e) => {
    switch(e.target.name){
      case "emailLogin":
        if(expresiones.correo.test(e.target.value)){
          document.getElementById('emailLogin').classList.remove('input-error');
          document.getElementById('emailLogin').classList.add('input-correcto');
        } else {
          document.getElementById('emailLogin').classList.add('input-error');
          document.getElementById('emailLogin').classList.remove('input-correcto');
        }
      break;
      case "passwordLogin":
        if(expresiones.password.test(e.target.value)){
          document.getElementById('passwordLogin').classList.remove('input-error');
          document.getElementById('passwordLogin').classList.add('input-correcto');
        } else {
          document.getElementById('passwordLogin').classList.add('input-error');
          document.getElementById('passwordLogin').classList.remove('input-correcto');
        }
      break;
    }
  });
});