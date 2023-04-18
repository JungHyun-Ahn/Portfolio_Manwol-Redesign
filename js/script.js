window.onload = function() {
  

};

// For You and Me Slide
const forNextBtn = document.querySelector(".for-slide-arrow .arrowRight");
const forSlideDisplay = document.querySelector(".forMeAndYou-slide-inner");


forNextBtn.addEventListener("click", function() {
  forNextSlide();
})

function forNextSlide() {
  const forSlideItem = document.querySelectorAll(".for-slide-items");
  forSlideItem[0].classList.remove("show");
  forSlideItem[1].classList.add("show");
  let cloneFirst = forSlideItem[0].cloneNode(true);
  forSlideDisplay.appendChild(cloneFirst);
  forSlideDisplay.removeChild(forSlideDisplay.firstElementChild);
}