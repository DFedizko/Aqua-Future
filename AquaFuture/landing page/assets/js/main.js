// Alerta de boas-vindas 

alert("Bem-vindo ao Aqua Future!");

// Scroll Suave para cada seção do cabeçalho

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// CARROSSEL NA SEÇÃO 2


document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carrossel-imagens img');
    const totalImages = images.length;
    const prevButton = document.querySelector('.voltar');
    const nextButton = document.querySelector('.proximo');

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });

    showImage(currentIndex);
});






