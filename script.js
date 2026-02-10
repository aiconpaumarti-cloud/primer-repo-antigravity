// Obtener elementos del DOM
const botonVerde = document.getElementById('botonVerde');
const payasoContainer = document.getElementById('payasoContainer');

// Agregar evento de clic al botón
botonVerde.addEventListener('click', () => {
    // Mostrar el contenedor del payaso
    payasoContainer.classList.remove('hidden');
    
    // Agregar animación después de un pequeño delay
    setTimeout(() => {
        payasoContainer.classList.add('show');
    }, 10);

    // Reproducir sonido de celebración (opcional)
    // Puedes agregar un audio si lo deseas

    // Ocultar el payaso después de 3 segundos al hacer clic en el fondo
    payasoContainer.addEventListener('click', () => {
        payasoContainer.classList.remove('show');
        
        setTimeout(() => {
            payasoContainer.classList.add('hidden');
        }, 500);
    });
});

// Agregar efecto de partículas al hacer clic en el botón
botonVerde.addEventListener('click', (e) => {
    createParticles(e);
});

function createParticles(e) {
    const rect = botonVerde.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    for (let i = 0; i < 20; i++) {
        createParticle(x, y);
    }
}

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '10px';
    particle.style.height = '10px';
    particle.style.borderRadius = '50%';
    particle.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '999';
    particle.style.boxShadow = '0 0 10px currentColor';
    
    document.body.appendChild(particle);

    const angle = Math.random() * Math.PI * 2;
    const velocity = 2 + Math.random() * 4;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;

    let posX = 0;
    let posY = 0;
    let opacity = 1;

    const animate = () => {
        posX += vx;
        posY += vy;
        opacity -= 0.02;

        particle.style.transform = `translate(${posX}px, ${posY}px)`;
        particle.style.opacity = opacity;

        if (opacity > 0) {
            requestAnimationFrame(animate);
        } else {
            particle.remove();
        }
    };

    animate();
}
