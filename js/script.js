// === Main Navigation ===
const mainNav = document.querySelector("#main-nav");
window.addEventListener("scroll", () => {
  if(scrollY > 0) {
    mainNav.classList.add("active");
  } else {
    mainNav.classList.remove("active");
  }
});

// === Main Slide ===
const mainSlideItems = document.querySelectorAll(".main-slide img");
let mainSlideIndex = 0;

function mainSlide() {
  mainSlideItems.forEach(items => {
    items.classList.remove("show");
  });
  mainSlideItems[mainSlideIndex].classList.add("show");
  mainSlideIndex = (mainSlideIndex + 1) % mainSlideItems.length;
}
// setInterval(mainSlide, 3000);

// === Article : For Me and You ===
// For You and Me Slide
const forNextBtn = document.querySelector(".slide-arrowCircle .arrowRight");
const forPrevBtn = document.querySelector(".slide-arrowCircle .arrowLeft");
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
