const sliderBlock1 = document.querySelector('.slider-left');
const sliderBlock2 = document.querySelector('.slider-right');
const leftSlide = document.querySelector('.Slider-btn-left');
const rightSlide = document.querySelector('.Slider-btn-right');

let pick1 = document.querySelector('.ourProects-content-block1');
let pick2 = document.querySelector('.ourProects-content-block2');

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(){
  showSlides(slideIndex += 1);
}

function minusSlide(){
  showSlides(slideIndex = n);
}

function showSlides(n){
  let i;
  let slides = document.querySelector('.item');

  if(n > slides.length){
    slideIndex = 1
  }
  if (n < 1 ) {
    slideIndex = slides.length
  }

for (i = 0; i < slides.length; i++){
  slides[i].style.display = "none";
}
slides[slideIndex - 1].style.display = "block";
}


function slide(){
  console.log("slide")

  pick1.classList.toggle('.sliding');

  pick2.classList.toggle('.sliding');
}

sliderBlock1.addEventListener('click', minusSlide);
sliderBlock2.addEventListener('click', plusSlide);