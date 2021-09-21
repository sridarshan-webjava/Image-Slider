const carouselSlides = document.getElementById("carousel-slides");
const carouselSlide = document.getElementsByClassName("slides");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let counter = 1;
let innerSize = carouselSlide[0].clientWidth;

carouselSlides.style.transform = "translateX(-" + innerSize * counter + "px";

prevBtn.addEventListener("click", () => {
  if (counter <= 0) {
    return;
  }
  counter--;
  carouselSlides.style.transition = "transform 0.5s";
  carouselSlides.style.transform = "translateX(-" + innerSize * counter + "px";
});

nextBtn.addEventListener("click", () => {
  if (counter >= carouselSlide.length - 1) {
    return;
  }
  counter++;
  carouselSlides.style.transition = "transform 0.5s";
  carouselSlides.style.transform = "translateX(-" + innerSize * counter + "px";
});

carouselSlides.addEventListener("transitionend", () => {
  if (counter === 0) {
    carouselSlides.style.transition = "none";
    counter = carouselSlide.length - 2;
    carouselSlides.style.transform =
      "translateX(-" + innerSize * counter + "px";
  } else if (counter === carouselSlides.children.length - 1) {
    carouselSlides.style.transition = "none";
    counter = carouselSlide.length - counter;
    carouselSlides.style.transform =
      "translateX(-" + innerSize * counter + "px";
  }
});
