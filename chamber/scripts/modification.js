document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el elemento del span de la fecha de la última modificación
    var lastModifiedSpan = document.getElementById('last-modified-date');

    // Obtiene la fecha de la última modificación del documento y la asigna al span
    lastModifiedSpan.textContent = document.lastModified;
});