let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");

function updateSlides() {
    slides.forEach((slide, i) => {
        slide.classList.remove("active", "prev-slide", "next-slide");
        if (i === currentIndex) {
            slide.classList.add("active");
        } else if (i === (currentIndex - 1 + slides.length) % slides.length) {
            slide.classList.add("prev-slide");
        } else if (i === (currentIndex + 1) % slides.length) {
            slide.classList.add("next-slide");
        }
    });
}

function moveSlide(step) {
    currentIndex = (currentIndex + step + slides.length) % slides.length;
    updateSlides();
}

document.addEventListener("DOMContentLoaded", updateSlides);