function mostrarMenu() {
  console.clear();
  let opcion = prompt(
    "Bienvenido a sia\n" +
    "Seleccione una opción:\n" +
    "1. Inicio de sesión\n" +
    "2. Olvidé mi contraseña\n" +
    "3. cerrar sesión\n" +
    "\nIngrese el número de la opción:"
  );
  if (opcion === "1") {
    login();
  } else if (opcion === "2") {
   recuperarContrasena();
  } else if(opcion === "3") {
    cerrarSesion(); 
  } else {
    alert("Opción no válida. Intente de nuevo.");
    mostrarMenu();
  }
}
function registro() {
  console.clear();
  let nombre = prompt("Ingrese su nombre completo:");
  let email = prompt("Ingrese su correo electrónico:");
  let password = prompt("Ingrese su contraseña:");
  alert("¡Registro exitoso! Ahora puede iniciar sesión.");
  mostrarMenu();
}


function login() {
  console.clear();
  let email = prompt("Ingrese su correo electrónico:");
  let password = prompt("Ingrese su contraseña:");
  if (email && password) {
    dashboard();
  } else {
    alert("Credenciales incorrectas. Intente de nuevo.");
    mostrarMenu();
  }
}
function recuperarContrasena() {
  console.clear();
  let email = prompt("Ingrese su correo electrónico para recuperar su contraseña:");
  if (email) {
    alert("Se ha enviado un enlace de recuperación a " + email);
  } else {
    alert("Correo electrónico no válido.");
  }
  mostrarMenu();
}
function cerrarSesion() {
  console.clear();
  alert("Sesión cerrada.");
  mostrarMenu();
}
window.onload = mostrarMenu;

import { expresiones } from './expresiones.js';

let inputs = document.getElementsByClassName("input");
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
