document.addEventListener('DOMContentLoaded', () => {

    // --- 1. CONTROL DEL MENÚ (SIDEBAR) ---
    const sidebar = document.getElementById('sidebar');

    window.toggleMenu = function() {
        if (!sidebar) return;
        sidebar.classList.toggle('active');
    };

    // --- 2. FUNCIÓN GENÉRICA PARA CARRUSELES CON DRAG ---
    function crearCarruselInteractivo(contenedorId, trackId, numSlides) {
        const contenedor = document.getElementById(contenedorId);
        const track = document.getElementById(trackId);

        if (!contenedor || !track) return;

        let isDragging = false;
        let startPos = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;
        let currentIndex = 0;

        // Iniciar arrastre
        contenedor.addEventListener('mousedown', (e) => {
            isDragging = true;
            startPos = e.pageX;
            contenedor.style.cursor = 'grabbing';
            track.style.transition = 'none';
            clearInterval(autoPlay);
        });

        // Mover
        contenedor.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const currentPosition = e.pageX;
            const diff = currentPosition - startPos;
            currentTranslate = prevTranslate + diff;
            track.style.transform = `translateX(${currentTranslate}px)`;
        });

        // Soltar
        const endDrag = () => {
            if (!isDragging) return;
            isDragging = false;
            contenedor.style.cursor = 'grab';

            const movedBy = currentTranslate - prevTranslate;

            if (movedBy < -100 && currentIndex < numSlides - 1) currentIndex++;
            if (movedBy > 100 && currentIndex > 0) currentIndex--;

            actualizarPosicion();
        };

        contenedor.addEventListener('mouseup', endDrag);
        contenedor.addEventListener('mouseleave', endDrag);

        function actualizarPosicion() {
            currentTranslate = currentIndex * -contenedor.offsetWidth;
            prevTranslate = currentTranslate;
            track.style.transition = 'transform 0.5s ease-out';
            track.style.transform = `translateX(${currentTranslate}px)`;
        }

        // AutoPlay
        let autoPlay = setInterval(() => {
            currentIndex = (currentIndex >= numSlides - 1) ? 0 : currentIndex + 1;
            actualizarPosicion();
        }, 5000);
    }

    // --- 3. ACTIVAR CARRUSELES ---
    crearCarruselInteractivo('carruselInicioContenedor', 'trackInicio', 2);
    crearCarruselInteractivo('contenedorCarrusel', 'trackServiciosImagenes', 3);

    // --- 4. LOGO SCROLL ARRIBA ---
    document.querySelectorAll('.logo').forEach(logo => {
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

});

// --- 5. MOSTRAR/OCULTAR CITAS ---
function toggleCitas() {
    const area = document.getElementById('areaCitas');
    if (!area) return;

    area.style.display = (area.style.display === 'block') ? 'none' : 'block';

    if (area.style.display === 'block') {
        window.scrollBy({ top: 300, behavior: 'smooth' });
    }
}

// --- 6. HASH INICIAL ---
window.onload = function() {
    if (!window.location.hash) {
        window.location.hash = "inicio";
    }
};
document.getElementById("formCitaReal").addEventListener("submit", function(e){
    e.preventDefault();

    const data = {
        nombre: this[0].value,
        telefono: this[1].value,
        especialidad: this[2].value,
        fecha: this[3].value,
        motivo: this[4].value
    };

    fetch("https://script.google.com/macros/s/AKfycbyU6LJa4Ar6pDohfqpljvJu2EURbxJWf37zFUdVIYhktzzwgtZZZ-15d8kQVsOdtxE5EA/exec", {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(response => {
        alert("Cita registrada correctamente");
        this.reset();
    })
    .catch(err => alert("Error al enviar"));
});