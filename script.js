document.addEventListener("DOMContentLoaded", function() {
    // Botón de scroll-top
    const scrollTopButton = document.querySelector('.scroll-top');

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Menú hamburguesa
    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-toggle');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }

    // Cerrar menú cuando se hace clic fuera de él
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('active');
        }
    });
});