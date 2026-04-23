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
        function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
    
    // 1. Le ponemos o quitamos la clase 'active' al menú
    sidebar.classList.toggle('active');

    // 2. Si el menú tiene la clase 'active', empujamos el contenido
    if (sidebar.classList.contains('active')) {
        // En pantallas grandes, empuja el contenido
        if (window.innerWidth > 768) {
            mainContent.style.marginLeft = "250px";
            mainContent.style.width = "calc(100% - 250px)";
        }
    } else {
        // Cuando se cierra, todo vuelve a la normalidad
        mainContent.style.marginLeft = "auto";
        mainContent.style.width = "100%";
    }
}
        
        function toggleCitas() {
            const area = document.getElementById('areaCitas');
            area.style.display = (area.style.display === 'block') ? 'none' : 'block';
            if(area.style.display === 'block') window.scrollBy(0, 300);
        }
document.querySelector('.logo').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
document.querySelector('.logo').addEventListener('click', function(e) {
    e.preventDefault(); // Evita que la página parpadee
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
window.onload = function() {
    // Si la URL no tiene un ancla específica, fuerza a ir al inicio
    if(!window.location.hash) {
        window.location.hash = "inicio";
    }
};
