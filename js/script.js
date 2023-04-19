// === Main Slide ===
const mainSlideItems = document.querySelectorAll(".main-slide img");
// let mainSlideLen = mainSlideItems.length
let mainSlideIndex = 0;

function mainSlide() {
  mainSlideItems.forEach(items => {
    items.classList.remove("show");
  });
  mainSlideItems[mainSlideIndex].classList.add("show");
  // chat GPT...
  mainSlideIndex = (mainSlideIndex + 1) % mainSlideItems.length;
  // if(mainSlideIndex < mainSlideLen) {
  //   mainSlideIndex++;
  // } else {
  //   mainSlideIndex = 0;
  // }
  // console.log(mainSlideIndex);
}
setInterval(mainSlide, 3000);

// let i = 0;

// function test() {
//   if(i<5) {
//     i++;
//   }else {
//     i=0;
//   }
//   console.log(i);
// }
// setInterval(test, 1000);


// === Article : For Me and You ===
// For You and Me Slide
const forNextBtn = document.querySelector(".for-slide-arrow .arrowRight");
const forPrevBtn = document.querySelector(".for-slide-arrow .arrowLeft");
const forSlideDisplay = document.querySelector(".forMeAndYou-slide-inner");
const pagerDots = document.querySelectorAll(".forMeAndYou-slide .pagers .dot");

// sub-tit text change
const forSubTits = document.querySelectorAll(".forMeAndYou-inner .sub-tit");
const forSubTitDetails = document.querySelectorAll(".forMeAndYou-inner .sub-tit-detail");

forNextBtn.addEventListener("click", forSlide);
forPrevBtn.addEventListener("click", forSlide);
pagerDots.forEach(dot => {
  dot.addEventListener("click", function(e) {
    if(!e.target.classList.contains("active")) {
      forSlide();
    }
  })
});

function forSlide() {
  const forSlideItem = document.querySelectorAll(".for-slide-items");
  forSlideItem[0].classList.remove("show");
  forSlideItem[1].classList.add("show");
  let cloneFirst = forSlideItem[0].cloneNode(true);
  forSlideDisplay.appendChild(cloneFirst);
  forSlideDisplay.removeChild(forSlideDisplay.firstElementChild);

  pagerDots.forEach(dot => {
    dot.classList.toggle("active");
  });
  forSubTits.forEach(subTit => {
    subTit.classList.toggle("show");
  });
  forSubTitDetails.forEach(subTitDetail => {
    subTitDetail.classList.toggle("show");
  });
}
