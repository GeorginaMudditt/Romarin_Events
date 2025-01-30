let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slides li");
  const prevButton = document.querySelector(".carousel-button.prev");
  const nextButton = document.querySelector(".carousel-button.next");

  // Clamp the index to ensure it's within the bounds
  currentSlide = Math.max(0, Math.min(index, slides.length - 1));

  const offset = -currentSlide * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;

  // Update button states
  prevButton.disabled = currentSlide === 0;
  nextButton.disabled = currentSlide === slides.length - 1; // Disable if on last slide
}

function nextSlide() {
  const slides = document.querySelectorAll(".slides li");
  // Improved condition to prevent going out-of-bounds
  if (currentSlide < slides.length - 1) {
    showSlide(currentSlide + 1);
  }
}

function prevSlide() {
  // Improved condition to prevent going out-of-bounds
  if (currentSlide > 0) {
    showSlide(currentSlide - 1);
  }
}

// Initialize the first slide and disable the prev button initially
showSlide(currentSlide);

// Event listeners for buttons
document
  .querySelector(".carousel-button.next")
  .addEventListener("click", nextSlide);
document
  .querySelector(".carousel-button.prev")
  .addEventListener("click", prevSlide);
