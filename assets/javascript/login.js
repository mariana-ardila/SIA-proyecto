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
