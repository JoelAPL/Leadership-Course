let currentSlide = 0;
let totalSlides = document.querySelectorAll('.slide').length;

function showSlide(n) {
    let slides = document.querySelectorAll('.slide');
    if (n >= slides.length) {
        currentSlide = 0;
    }
    if (n < 0) {
        currentSlide = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[currentSlide].style.display = 'block';
}

function moveSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

function checkAnswers() {
    let correctAnswers = {
        q1: 'paris',
        q2: 'amazonas'
        // Agrega las respuestas correctas para cada pregunta aquí
    };

    let numWrong = 0;
    for (let i = 1; i <= totalSlides; i++) {
        let radioBtns = document.getElementsByName('q' + i);
        let selectedValue = '';
        for (let j = 0; j < radioBtns.length; j++) {
            if (radioBtns[j].checked) {
                selectedValue = radioBtns[j].value;
            }
        }
        if (selectedValue !== correctAnswers['q' + i]) {
            numWrong++;
        }
    }
    document.getElementById('result').innerText = 'Respuestas incorrectas: ' + numWrong;
}

showSlide(currentSlide);
