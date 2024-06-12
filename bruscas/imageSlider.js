document.addEventListener('DOMContentLoaded', function () {
  const learnBack = document.querySelector('.learn-back');
  const imageReference = document.querySelector('.image-reference');
  const closeButton = document.querySelector('.close-button');

  // Función para mostrar la imagen
  function showImage() {
    imageReference.classList.add('active');
    // Ocultar la imagen después de 5 segundos (5000 milisegundos)
    setTimeout(hideImage, 5000);
  }

  // Función para ocultar la imagen
  function hideImage() {
    imageReference.classList.remove('active');
  }

  // Evento para mostrar la imagen al hacer clic en "Ver Imagen"
  learnBack.addEventListener('click', function (event) {
    event.preventDefault();
    showImage();
  });

  // Evento para ocultar la imagen al hacer clic en el botón de cierre
  closeButton.addEventListener('click', function (event) {
    event.stopPropagation();
    hideImage();
  });

  // Evento para ocultar la imagen al hacer clic en cualquier otra parte de la página
  document.addEventListener('click', function (event) {
    if (!imageReference.contains(event.target) && !learnBack.contains(event.target)) {
      hideImage();
    }
  });
});
