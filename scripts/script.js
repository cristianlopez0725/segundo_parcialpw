function toggleMenu() {
    const menu = document.getElementById('menu-list');
    const menuIcon = document.getElementById('menu-icon');
    const menuContainer = document.querySelector('.menu-horizontal');

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        menuIcon.classList.replace('bx-x', 'bx-menu');
        menuContainer.classList.remove('active'); // Quitar la expansión del fondo
    } else {
        menu.style.display = 'block';
        menuIcon.classList.replace('bx-menu', 'bx-x');
        menuContainer.classList.add('active'); // Expandir el fondo
    }
}

// Selecciona todas las opciones del menú
document.querySelectorAll('#menu-list li a').forEach(item => {
    item.addEventListener('click', () => {
        toggleMenu(); // Cierra el menú cuando se hace clic en una opción
    });
});




