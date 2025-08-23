function paginaDashboard() {    
  console.clear();
  let opcion = prompt(
    "Bienvenido al sistema integral académico\n" +
    "-Optimiza la gestión de calificaciones\n" +
    "-Automatización total\n" +
    "-Panel intuitivo\n" +
    "-Seguridad de datos\n\n" +
    "¿Listo para transformar la institución?\n" +
    "1. Agendar demo\n"+
    "2. Salir\n"+
    "\nIngrese su opción: "
  );
    if (opcion === "1") {
        alert("Demo agendada exitosamente. Nos pondremos en contacto pronto.");
    }else if (opcion === "2") {
        alert("Gracias por visitar nuestro sistema. ¡Hasta luego!");
    }
}
    window.onload = paginaDashboard;