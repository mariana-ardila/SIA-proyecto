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