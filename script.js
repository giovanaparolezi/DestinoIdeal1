document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let slideInterval;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        
      
        if (slides[currentSlide].tagName === 'VIDEO') {
            slides[currentSlide].pause();
        }

        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
        
      
        if (slides[currentSlide].tagName === 'VIDEO') {
            slides[currentSlide].play();
            slides[currentSlide].addEventListener('ended', nextSlide, { once: true });
        } else {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 4000); 
        }
    }

    slideInterval = setInterval(nextSlide, 4000); 
});




window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    if (window.scrollY > 0) {
        header.style.backgroundColor = '#1F6D8C'; 
    } else {
        header.style.backgroundColor = 'transparent'; 
    }
});



window.addEventListener('scroll', function() {
    var main = document.querySelector('main');
    var cabecalho = document.querySelector('.cabecalho');
    
    if (window.scrollY > 0) {
        main.classList.add('scroll');
        cabecalho.classList.add('scroll');
    } else {
        main.classList.remove('scroll');
        cabecalho.classList.remove('scroll');
    }
});



const labels = document.querySelectorAll('.radio-input label');

labels.forEach(label => {
    const selection = label.querySelector('.selection');
    const textWidth = label.clientWidth;
    selection.style.width = `${textWidth}px`;
});


function toggleAnswer(answerId) {
    const answer = document.getElementById(answerId);
    const allAnswers = document.querySelectorAll('.faq-answer');
    allAnswers.forEach(a => {
        if (a !== answer) {
            a.style.display = 'none';
        }
    });
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector("footer").style.display = "block";
  } else {
    document.querySelector("footer").style.display = "none";
  }
}
