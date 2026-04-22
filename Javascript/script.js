document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionamos los elementos
    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');
    const cerrarBtn = document.getElementById('cerrarBtn');

    // 2. Función para abrir/cerrar (La hacemos global para tu onclick del HTML)
    window.toggleMenu = function() {
        if (sidebar) {
            sidebar.classList.toggle('active');
        }
    };

    // 3. Soporte extra por si usas ID en lugar de onclick
    if (menuBtn) {
        menuBtn.onclick = toggleMenu;
    }

    if (cerrarBtn) {
        cerrarBtn.onclick = () => {
            sidebar.classList.remove('active');
        };
    }

    // 4. Carrusel 1
    const track = document.getElementById('carruselTrack');
    if (track) {
        let posicion = 0;
        setInterval(() => {
            posicion = (posicion === 0) ? 50 : 0;
            track.style.transform = `translateX(-${posicion}%)`;
        }, 5000);
    }

    // 5. Carrusel 2 (trackInicio)
    const trackInicio = document.getElementById('trackInicio');
    if (trackInicio) {
        let i = 0;
        setInterval(() => {
            i = (i === 0) ? 100 : 0;
            trackInicio.style.transform = `translateX(-${i}%)`;
        }, 4000);
    }
});