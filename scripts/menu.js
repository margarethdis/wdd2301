document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#menu').addEventListener('click', function() {
        document.querySelector('.nav').classList.toggle('show');
        document.querySelector('#menu').classList.toggle('open');
    });

    // Cerrar el menú al hacer clic en el botón "X"
    document.querySelector('.close-menu').addEventListener('click', function() {
        document.querySelector('.nav').classList.remove('show');
        document.querySelector('#menu').classList.remove('open');
    });
});
