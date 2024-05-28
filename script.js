// Obtener todos los botones por su clase común
var botones = document.querySelectorAll('.boton-hipervinculo');

// Iterar sobre cada botón y agregar un event listener para el clic
botones.forEach(function(boton) {
  boton.addEventListener('click', function() {
    // Obtener la URL del atributo personalizado "data-url"
    var url = boton.getAttribute('data-url');
    // Redireccionar al hipervínculo correspondiente
    window.location.href = url;
  });
});

// script media query
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}