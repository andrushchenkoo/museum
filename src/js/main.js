import "../scss/style.scss";

// BURGER-MENU
const menu = document.querySelector(".burger-menu");
const burgerBtnOpen = document.querySelector(".burger-button--open");
const burgerBtnClose = document.querySelector(".burger-button--close");

const toggleBurgerMenu = () => {
  burgerBtnOpen.classList.toggle("burger-button--shown");
  burgerBtnClose.classList.toggle("burger-button--shown");
  menu.classList.toggle("open");
};
burgerBtnOpen.addEventListener("click", toggleBurgerMenu);
burgerBtnClose.addEventListener("click", toggleBurgerMenu);

// WELCOME-SLIDER
const prev = document.querySelector(".welcome__slider-arrow--prev");
const next = document.querySelector(".welcome__slider-arrow--next");
const slides = document.querySelectorAll(".welcome__slide");
const squares = document.querySelectorAll(
  ".welcome__slider-pagination-element"
);
const counter = document.querySelector(".welcome__slider-number");


let index = 0;

const activeSlideAndSquare = (n) => {
  for (let slide of slides) {
    slide.classList.remove("active");
  }
  slides[n].classList.add("active");

  for (let square of squares) {
    square.classList.remove("active");
  }
  squares[n].classList.add("active");

 counter.textContent = `0${index + 1} | 05`;
};

const switchToPrevSlide = () => {
  if (!index) {
    index = slides.length - 1;
    activeSlideAndSquare(index);
  } else {
    index--;
    activeSlideAndSquare(index);
  }
 
};

const switchToNextSlide = () => {
  if (index === slides.length - 1) {
    index = 0;
    activeSlideAndSquare(index);
  } else {
    index++;
    activeSlideAndSquare(index);
  }

};

squares.forEach((square, squareIndex) => {
  square.addEventListener("click", () => {
    index = squareIndex;
    activeSlideAndSquare(index);
  });
});

prev.addEventListener("click", switchToPrevSlide);
next.addEventListener("click", switchToNextSlide);