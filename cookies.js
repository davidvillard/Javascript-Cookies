// Función para mostrar las cookies vigentes cada 2 segundos
setInterval(function() {
    console.clear(); // Limpiar la consola para mejor visualización

    // Obtener todas las cookies
    var cookies = document.cookie.split('; ');

    // Mostrar cada cookie en la consola
    cookies.forEach(function(cookie) {
        console.log(cookie);
    });
}, 2000);

// Solicitar información al usuario y establecer cookies
var idioma = prompt("Ingrese su idioma (español, inglés, ...)") || "espanol";
document.cookie = "idioma=" + idioma + "; expires=" + new Date(Date.now() + 10000).toUTCString();

var tema = prompt("Ingrese su tema (oscuro, claro, ...)") || "claro";
document.cookie = "tema=" + tema + "; expires=" + new Date(Date.now() + 15000).toUTCString();

var usuario = prompt("Ingrese su usuario (juan123, ana_78, ...)") || "usuario";
document.cookie = "usuario=" + usuario + "; expires=" + new Date(Date.now() + 20000).toUTCString();

var preferencia = prompt("Ingrese su preferencia (alta, baja, ...)") || "baja";
document.cookie = "preferencia=" + preferencia;

var ultimaVisita = new Date().toUTCString();
document.cookie = "ultimaVisita=" + ultimaVisita;

// Borrar cookies al segundo acceso
var segundaVisita = document.cookie.indexOf("segundaVisita");
if (segundaVisita !== -1) {
    // Borrar las cookies que no tienen fecha de expiración
    document.cookie = "idioma=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "tema=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "usuario=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "preferencia=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "ultimaVisita=;expires=Thu, 01 Jan 1970 00:00:00 GMT";

    // Borrar la cookie con fecha de expiración después de 2 visitas
    document.cookie = "segundaVisita=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
} else {
    // Establecer la cookie que indica la segunda visita
    document.cookie = "segundaVisita=true";
}
