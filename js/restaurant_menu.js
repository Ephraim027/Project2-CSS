let slideIndex = 0;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slides");
  if (n >= slides.length) { slideIndex = 0; } // If we go past the last slide, loop back to the first
  if (n < 0) { slideIndex = slides.length - 1; } // If we go before the first slide, go to the last one

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  // Hide all slides
  }

  slides[slideIndex].style.display = "block";  // Show the current slide
}

// Initialize the first slide
showSlides(slideIndex);
