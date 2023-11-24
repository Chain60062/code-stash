let currentSlideIndex = 1;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let previousButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");
let slideCount = slides.length;
let dotCount = dots.length;

function displaySlides(slideIndex) {
  if (slideCount <= 1) {
    hideButtonsAndDots();
  } else {
    if (currentSlideIndex > slideCount) {
      currentSlideIndex = 1;
    } else if (currentSlideIndex < 1) {
      currentSlideIndex = slideCount;
    }
    for (let i = 0; i < slideCount; i++) {
      slides[i].classList.add("hidden");
    }
    for (let i = 0; i < dotCount; i++) {
      dots[i].classList.remove("active");
    }
    // display the current image
    slides[currentSlideIndex - 1].classList.replace("hidden", "showing");
    // add active class to current dot
    dots[currentSlideIndex - 1].classList.add("active");
  }
}

// Next/previous controls
function plusSlides(next) {
  displaySlides((currentSlideIndex += next));
}
// controls for the dots
function currentSlide(slideIndex) {
  displaySlides((currentSlideIndex = slideIndex));
}

function hideButtonsAndDots() {
  for (i = 0; i < dotCount; i++) {
    dots[i].classList.add("hidden");
  }
  previousButton.classList.add("hidden");
  nextButton.classList.add("hidden");
}
// initialize slides
displaySlides(currentSlideIndex);
