document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-hamburguer');
    const menu = document.querySelector('.menu');

    menuButton.addEventListener('click', function() {
        menu.classList.toggle('open');
    });
});
