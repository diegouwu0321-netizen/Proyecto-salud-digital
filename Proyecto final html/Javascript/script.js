document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');
    const cerrarBtn = document.getElementById('cerrarBtn');

    // Abrir menú
    if (menuBtn) {
        menuBtn.onclick = () => { sidebar.style.left = '0'; };
    }

    // Cerrar menú
    if (cerrarBtn) {
        cerrarBtn.onclick = () => { sidebar.style.left = '-280px'; };
    }

    // Carrusel Automático
    const track = document.getElementById('carruselTrack');
    if (track) {
        let posicion = 0;
        setInterval(() => {
            posicion = (posicion === 0) ? 50 : 0;
            track.style.transform = `translateX(-${posicion}%)`;
        }, 5000); // Cambia cada 5 segundos
    }
});