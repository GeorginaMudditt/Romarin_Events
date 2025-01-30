let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slides li");
  const prevButton = document.querySelector(".carousel-button.prev");
  const nextButton = document.querySelector(".carousel-button.next");

  if (index >= slides.length) {
    currentSlide = slides.length - 1;
  } else if (index < 0) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;

  // Disable buttons at the ends
  prevButton.disabled = currentSlide === 0;
  nextButton.disabled = currentSlide === slides.length - 1;
}

function nextSlide() {
  if (currentSlide < document.querySelectorAll(".slides li").length - 1) {
    showSlide(currentSlide + 1);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    showSlide(currentSlide - 1);
  }
}

// Initialise the first slide
showSlide(currentSlide);
