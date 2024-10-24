
// Inicializar Swiper con efecto "cube" y ajuste para el desplazamiento con el mouse
var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: false, // Deshabilita el deslizamiento táctil
    grabCursor: false, // No mostrar el cursor de "agarrar"
    cubeEffect: {
        shadow: true, // Sombra en el efecto cube
        slideShadows: true, // Sombras para cada slide
        shadowOffset: 20, // Desplazamiento de sombra
        shadowScale: 0.94, // Escalado de sombra
    },
    mousewheel: true // Permitir desplazamiento con la rueda del mouse
});

// Evento que se ejecuta cuando cambia el slide
swiper.on('slideChange', function () {
    // Quitar la clase 'activeLink' de todos los elementos de la lista
    for (let i of document.querySelectorAll(".Links li")) {
        i.classList.remove("activeLink");
    }
    // Añadir la clase 'activeLink' al elemento correspondiente
    Array.from(document.querySelectorAll(".Links li"))[swiper.activeIndex].classList.add("activeLink");
});

// Función para navegar entre los slides desde la lista de enlaces
function Navigate(indx) {
    // Quitar la clase 'activeLink' de todos los elementos de la lista
    for (let i of document.querySelectorAll(".Links li")) {
        i.classList.remove("activeLink");
    }
    // Añadir la clase 'activeLink' al elemento seleccionado
    Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activeLink");
    // Cambiar el slide según el índice recibido
    swiper.slideTo(indx, 1000, true);
}

function toggleText(button) {
    // Encuentra el h3 siguiente al botón
    var text = button.nextElementSibling;

    // Alterna la visibilidad del texto
    if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "block";
        button.textContent = "Mostrar menos"; // Cambia el texto del botón
    } else {
        text.style.display = "none";
        button.textContent = "Mostrar más"; // Cambia el texto del botón
    }
}