let slideIndex = 0;
showSlides();

// Add event listeners to navigation buttons
document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
document.querySelector('.next').addEventListener('click', () => plusSlides(1));

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

function showSlides() {
  let i;
  let slides = document.querySelectorAll('.hero-section .slide');
  let totalSlides = slides.length;

  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }

  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }

  for (i = 0; i < totalSlides; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
  console.log(`Slide ${slideIndex} displayed`);
}

// Change slide every 6 seconds
setInterval(() => plusSlides(1), 6000);