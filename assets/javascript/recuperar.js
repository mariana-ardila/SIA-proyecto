
let mensaje = alert("Introduce tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.");
function recuperarContrasena() {
  console.clear();
  let email = prompt("Ingrese su correo electrónico para recuperar su contraseña:");
  if (email) {
    alert("Se ha enviado un enlace de recuperación a " + email);
  } else {
    alert("Correo electrónico no válido.");
  }
  if (confirm("¿Desea regresar al inicio de sesion?")) {
    window.location.href = "http://127.0.0.1:5500/index.html";
  }
}
window.onload = recuperarContrasena;