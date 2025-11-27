// Función que maneja el login
function validarLogin(event) {
  event.preventDefault(); // evita recarga de la página

  const CLAVE_SECRETA = "ok";
  const passwordInput = document.getElementById("password").value;

  if (passwordInput.toLowerCase() === CLAVE_SECRETA) {
    alert("¡Acceso concedido! Bienvenido.");
    window.location.href = "landingpage.html"; // ← tu redirección correcta
  } else {
    alert("Clave incorrecta. Inténtalo de nuevo.");
    document.getElementById("password").value = "";
  }

  return false;
}
