document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 4000); 
});

window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    if (window.scrollY > 0) {
        header.style.backgroundColor = '#1F6D8C'; 
    } else {
        header.style.backgroundColor = 'transparent'; 
    }
});

