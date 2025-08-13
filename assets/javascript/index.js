function paginaDashboard() {    
  console.clear();
  let opcion = prompt(
    "bienvenido al sistema integral academico\n" +
    "optimiza la gestion de calificaciones\n" +
    "automatizacion total\n" +
    "panel intuitivo\n" +
    "seguridad de datos\n\n" +
    "listo para transformar la institucion?\n" +
    "1. agendar demo\n"+
    "2. salir\n"+
    "\ningrese su opcion:"
  );
    if (opcion === "1") {
        alert("Demo agendada exitosamente. Nos pondremos en contacto pronto.");
    }else if (opcion === "2") {
        alert("Gracias por visitar nuestro sistema. ¡Hasta luego!");
    }
}
    window.onload = paginaDashboard;