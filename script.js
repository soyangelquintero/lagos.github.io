document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica de Botones de Solución ---
    const solutionButtons = document.querySelectorAll('.solution-btn');
    const solutionDisplay = document.getElementById('solution-display');

    const solutions = {
        separacion: 'Colocar carteles que muestren el impacto de tirar basura y comer comida chatarra',
        huerto: 'Implementar una estratificación de botes de basura para evitar que los alumnos la tiren en el piso',
        comedores: 'en los momentos de recreación (como entre clases) reportar a quien tire basura',
        talleres: 'Organizar talleres interactivos sobre nutrición, reciclaje, compostaje y reducción de plásticos, involucrando a toda la comunidad.',
        reforestacion: 'proponer que se vendan más opciones saludables'
    };

    solutionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const solutionKey = button.dataset.solution;
            solutionDisplay.textContent = solutions[solutionKey] || 'No hay descripción para esta solución.';
        });
    });

    // Inicializar el display de soluciones con un mensaje por defecto
    solutionDisplay.textContent = 'Haz clic en un botón para ver una propuesta de solución.';

    // --- Lógica del Carrusel de Imágenes ---
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    let counter = 0;
    const size = carouselImages[0].clientWidth; // Ancho de una imagen

    // Ajustar el slide inicial
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    nextBtn.addEventListener('click', () => {
        if (counter >= carouselImages.length - 1) { // Si ya estamos en la última imagen
            counter = 0; // Volver al inicio
        } else {
            counter++;
        }
        carouselSlide.style.transition = 'transform 0.5s ease-in-out';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) { // Si ya estamos en la primera imagen
            counter = carouselImages.length - 1; // Ir a la última
        } else {
            counter--;
        }
        carouselSlide.style.transition = 'transform 0.5s ease-in-out';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    // Clonar imágenes para un carrusel infinito (opcional, para un efecto más suave)
    // Para simplificar, en esta versión no se implementa el clonado, pero se puede añadir si se desea un "loop" más fluido.

    // --- Lógica del Formulario de Contacto ---
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío por defecto del formulario

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const suggestion = document.getElementById('suggestion').value;

        // **Aquí es donde necesitas un backend para enviar el correo.**
        // JavaScript del lado del cliente NO puede enviar correos directamente a un correo personal por razones de seguridad.

        // Una forma común de manejar esto es usar un servicio de backend como:
        // 1. Un script de PHP en tu servidor.
        // 2. Un servicio de terceros como EmailJS, Formspree, Netlify Forms, etc.
        // 3. Un backend personalizado con Node.js, Python, etc.

        // Ejemplo conceptual (NO FUNCIONAL SIN BACKEND):
        /*
        fetch('/send-email', { // Esta ruta debería ser tu endpoint de backend
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, suggestion }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('¡Gracias por tu sugerencia! Ha sido enviada.');
                contactForm.reset(); // Limpiar el formulario
            } else {
                alert('Hubo un error al enviar tu sugerencia. Por favor, intenta de nuevo.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Hubo un problema de conexión. Por favor, intenta de nuevo.');
        });
        */

        // **Para este ejemplo, solo mostraremos una alerta para simular el envío:**
        alert(`Sugerencia enviada:\n\nNombre: ${name}\nCorreo: ${email}\nSugerencia: ${suggestion}\n\nNota: Para enviar esto a un correo real, se necesita un servidor (backend).`);
        contactForm.reset(); // Limpiar el formulario después de "enviar"
    });
});





// --- Soluciones para los botones ---
const solutions = {
    huerto: "Colocación estratégica de botes de basura y reciclaje.",
    comedores: "“Recreos limpios” con incentivos para mantener el entorno limpio.",
    talleres: "Talleres y actividades para promover una alimentación saludable.",
    reforestacion: "Colaboración con la cafetería escolar para reducir el uso de plásticos y fomentar opciones saludables.",
    campanas: "Colocar carteles creativos y llamativos que muestren el impacto de tirar basura y comer comida chatarra."
};

document.querySelectorAll('.solution-btn').forEach(button => {
    button.addEventListener('click', () => {
        const key = button.getAttribute('data-solution');
        document.getElementById('solution-display').textContent = solutions[key] || "Selecciona una opción.";
    });
});


// --- Fade-in al hacer scroll ---
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // La animación se dispara una sola vez
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});
