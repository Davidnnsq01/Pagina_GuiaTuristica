const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');
    const totalItems = items.length;
    let currentIndex = 0;
    const intervalTime = 6000;
    let autoSlideInterval;

    // Actualiza la posición del carrusel
    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    // Función para mover el carrusel
    function moveSlide(direction) {
        currentIndex = (currentIndex + direction + totalItems) % totalItems;
        updateCarousel();
    }

    // Inicia el desplazamiento automático
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
        moveSlide(1);
    }, intervalTime);
    }

    // Detiene el desplazamiento automático
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Configura los botones
    prevButton.addEventListener('click', () => {
        stopAutoSlide();
        moveSlide(-1);
        startAutoSlide();
    });

    nextButton.addEventListener('click', () => {
        stopAutoSlide();
        moveSlide(1);
        startAutoSlide();
    });

    // Inicia el desplazamiento automático al cargar
    startAutoSlide();


    /*Numeros*/
    const circles = document.querySelectorAll('.col');
    const contents = document.querySelectorAll('.content');
    
    circles.forEach(circle => {
        circle.addEventListener('click', () => {
        const number = circle.dataset.number;
        contents.forEach(content => {
        content.style.display = 'none';
        });
        document.getElementById(`content${number}`).style.display = 'block';
        });
    });