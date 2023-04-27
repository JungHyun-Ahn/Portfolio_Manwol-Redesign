// === Main Navigation ===
const mainNav = document.querySelector(".main-nav");
const bubble = document.querySelector(".bubble");
window.addEventListener("scroll", () => {
  if(scrollY > 0) {
    mainNav.classList.add("active");
    bubble.classList.remove("show");
  } else {
    mainNav.classList.remove("active");
    bubble.classList.add("show");
  }
});

const mainNavLists = document.querySelectorAll(".nav-left .nav-menu > li > a");
const subMenus = document.querySelectorAll(".sub-menu");
const subMenuBG = document.querySelector(".sub-menu-bg");
let listIndex = 0;

mainNavLists.forEach(list => {
  list.addEventListener("mouseover", (e) => {
    const lists = [...e.target.parentElement.parentElement.children];
    listIndex = lists.indexOf(e.target.parentElement);
    console.log(listIndex);
    subMenus.forEach(subMenu => {
      subMenu.classList.remove("active");
    });
    if(listIndex >= 1 && listIndex<=4) {
      subMenus[listIndex - 1].classList.add("active");
      subMenuBG.classList.add("active");
    } else {
      subMenuBG.classList.remove("active");
    }
  });
});
mainNav.addEventListener("mouseleave", () => {
    subMenus.forEach(subMenu => {
      subMenu.classList.remove("active");
    });
    subMenuBG.classList.remove("active");
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
setInterval(mainSlide, 5000);

// === Article : For Me and You ===
// For You and Me Slide
const forNextBtn = document.querySelector(".slide-arrowCircle .arrowRight");
const forPrevBtn = document.querySelector(".slide-arrowCircle .arrowLeft");
const forSlideDisplay = document.querySelector(".forMeAndYou-slide-inner");
const forpagerDots = document.querySelectorAll(".forMeAndYou-slide .pagers .dot");

// sub-tit text change
const forSubTits = document.querySelectorAll(".forMeAndYou-inner .sub-tit");
const forSubTitDetails = document.querySelectorAll(".forMeAndYou-inner .sub-tit-detail");

forNextBtn.addEventListener("click", forSlide);
forPrevBtn.addEventListener("click", forSlide);
forpagerDots.forEach(dot => {
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
  let forCloneFirst = forSlideItem[0].cloneNode(true);
  forSlideDisplay.appendChild(forCloneFirst);
  forSlideDisplay.removeChild(forSlideDisplay.firstElementChild);

  forpagerDots.forEach(dot => {
    dot.classList.toggle("active");
  });
  forSubTits.forEach(subTit => {
    subTit.classList.toggle("show");
  });
  forSubTitDetails.forEach(subTitDetail => {
    subTitDetail.classList.toggle("show");
  });
}

// === Article : For Me and You ===
// About Slide
const aboutNextBtn = document.querySelector("#about-content .arrows .right");
const aboutPrevBtn = document.querySelector("#about-content .arrows .left");
let aboutSlideDisplay = document.querySelector(".about-slide-items");
let aboutSlideItem = document.querySelectorAll(".about-slide-item");
const aboutpagerDots = document.querySelectorAll("#about-content .pagers .dot");

// clone
let aboutCloneLast = aboutSlideItem[aboutSlideItem.length - 1].cloneNode(true);
let aboutCloneFirst = aboutSlideItem[0].cloneNode(true);
aboutSlideDisplay.insertBefore(aboutCloneLast, aboutSlideItem[0]);
aboutSlideDisplay.appendChild(aboutCloneFirst);

// init
aboutSlideDisplay.style.width = (aboutSlideItem.length + 2) * 100 + "%";
let aboutSlideIndex = 0;
let marginLeftValue = -100;
aboutSlideDisplay.style.marginLeft = marginLeftValue + "%";

// addEventListener
aboutNextBtn.addEventListener("click", aboutNextSlide);
aboutPrevBtn.addEventListener("click", aboutPrevSlide);
aboutpagerDots.forEach(dot => {
  dot.addEventListener("click", (e) => {
    if(!e.target.classList.contains("active")) {
      aboutpagerDots.forEach(dot => {
        dot.classList.remove("active");
      })
      e.target.classList.add("active");

      const nodes = [...e.target.parentElement.children];
      aboutSlideIndex = nodes.indexOf(e.target)
      aboutSlideDisplay.style.transition = '500ms';
      marginLeftValue = (aboutSlideIndex + 1) * (-100);
      aboutSlideDisplay.style.marginLeft = marginLeftValue + "%";
    }
  })
});

// nextSlide
function aboutNextSlide() {
  aboutSlideIndex++;
  aboutSlideDisplay.style.transition = '500ms';
  marginLeftValue = (aboutSlideIndex + 1) * (-100);
  aboutSlideDisplay.style.marginLeft = marginLeftValue + "%";

  if(aboutSlideIndex > aboutSlideItem.length - 1) {
    aboutSlideIndex = 0;
    setTimeout(function(){
      aboutSlideDisplay.style.transition = '0ms';
      marginLeftValue = (aboutSlideIndex + 1) * (-100);
      aboutSlideDisplay.style.marginLeft = marginLeftValue + "%";
    },500);
  }
  // pagers
  aboutpagerDots.forEach(dot => {
    dot.classList.remove("active");
  })
  aboutpagerDots[aboutSlideIndex].classList.add("active");
}

// prevSlide
function aboutPrevSlide() {
  aboutSlideIndex--;
  aboutSlideDisplay.style.transition = '500ms';
  marginLeftValue = (aboutSlideIndex + 1) * (-100);
  aboutSlideDisplay.style.marginLeft = marginLeftValue + "%";

  if(aboutSlideIndex < 0) {
    aboutSlideIndex = aboutSlideItem.length - 1;
    setTimeout(function(){
      aboutSlideDisplay.style.transition = '0ms';
      marginLeftValue = (aboutSlideIndex + 1) * (-100);
      aboutSlideDisplay.style.marginLeft = marginLeftValue + "%";
    },500);
  }
  // pagers
  aboutpagerDots.forEach(dot => {
    dot.classList.remove("active");
  })
  aboutpagerDots[aboutSlideIndex].classList.add("active");
}

// === Article : Flavor ===
// Flavor Slide
const flavorNextBtn = document.querySelector("#flavor-content .slide-arrowCircle .arrowRight");
const flavorPrevBtn = document.querySelector("#flavor-content .slide-arrowCircle .arrowLeft");
let detailSlide = document.querySelector(".flavor-slide-detail .detail-items");
let detailSlideItem = document.querySelectorAll(".flavor-slide-detail .detail-item");
let simpleSlide = document.querySelector(".flavor-slide-simple .simple-items");
let simpleSlideItem = document.querySelectorAll(".flavor-slide-simple .simple-item");

// clone
let detailCloneLast = detailSlideItem[detailSlideItem.length - 1].cloneNode(true);
let detailCloneFirst = detailSlideItem[0].cloneNode(true);
detailSlide.insertBefore(detailCloneLast, detailSlideItem[0]);
detailSlide.appendChild(detailCloneFirst);

let simpleCloneThirdLast = simpleSlideItem[simpleSlideItem.length - 3].cloneNode(true);

let simpleCloneSecondLast = simpleSlideItem[simpleSlideItem.length - 2].cloneNode(true);
let simpleCloneLast = simpleSlideItem[simpleSlideItem.length - 1].cloneNode(true);
let simpleCloneFirst = simpleSlideItem[0].cloneNode(true);
let simpleCloneSecond = simpleSlideItem[1].cloneNode(true);
let simpleCloneThird = simpleSlideItem[2].cloneNode(true);
simpleSlide.insertBefore(simpleCloneThirdLast, simpleSlideItem[0]);
simpleSlide.insertBefore(simpleCloneSecondLast, simpleSlideItem[0]);
simpleSlide.insertBefore(simpleCloneLast, simpleSlideItem[0]);
simpleSlide.appendChild(simpleCloneFirst);
simpleSlide.appendChild(simpleCloneSecond);
simpleSlide.appendChild(simpleCloneThird);

// init
detailSlide.style.width = (detailSlideItem.length + 2) * 100 + "%";
let detailSlideIndex = 0;
let detailMarginLeftValue = -100;
detailSlide.style.marginLeft = detailMarginLeftValue + "%";

simpleSlide.style.width = (simpleSlideItem.length + 6) * (150 + 20) + "px";
let simpleSlideIndex = 2;
let simpleMarginLeftValue = -170 * 4;
simpleSlide.style.marginLeft = simpleMarginLeftValue + "px";

// addEventListener
flavorNextBtn.addEventListener("click", flavorNextSlide);
flavorPrevBtn.addEventListener("click", flavorPrevSlide);

// nextSlide
function flavorNextSlide() {
  // detail
  detailSlideIndex++;
  detailSlide.style.transition = '550ms';
  detailMarginLeftValue = (detailSlideIndex + 1) * (-100);
  detailSlide.style.marginLeft = detailMarginLeftValue + "%";

  if(detailSlideIndex > detailSlideItem.length - 1) {
    detailSlideIndex = 0;
    setTimeout(function(){
      detailSlide.style.transition = '0ms';
      detailMarginLeftValue = (detailSlideIndex + 1) * (-100);
      detailSlide.style.marginLeft = detailMarginLeftValue + "%";
    },500);
  }

  // simple
  simpleSlideIndex++;
  simpleSlide.style.transition = '500ms';
  simpleMarginLeftValue = (simpleSlideIndex + 2) * (-170);
  simpleSlide.style.marginLeft = simpleMarginLeftValue + "px";

  if(simpleSlideIndex > simpleSlideItem.length) {
    simpleSlideIndex = 1;
    setTimeout(function(){
      simpleSlide.style.transition = '0ms';
      simpleMarginLeftValue = (simpleSlideIndex + 2) * (-170);
      simpleSlide.style.marginLeft = simpleMarginLeftValue + "px";
    },500);
  }
}

// prevSlide
function flavorPrevSlide() {
  // detail
  detailSlideIndex--;
  detailSlide.style.transition = '550ms';
  detailMarginLeftValue = (detailSlideIndex + 1) * (-100);
  detailSlide.style.marginLeft = detailMarginLeftValue + "%";

  if(detailSlideIndex < 0) {
    detailSlideIndex = detailSlideItem.length - 1;
    setTimeout(function(){
      detailSlide.style.transition = '0ms';
      detailMarginLeftValue = (detailSlideIndex + 1) * (-100);
      detailSlide.style.marginLeft = detailMarginLeftValue + "%";
    },500);
  }

  // simple
  simpleSlideIndex--;
  simpleSlide.style.transition = '500ms';
  simpleMarginLeftValue = (simpleSlideIndex + 2) * (-170);
  simpleSlide.style.marginLeft = simpleMarginLeftValue + "px";

  if(simpleSlideIndex < 0) {
    simpleSlideIndex = detailSlideItem.length - 1;
    setTimeout(function(){
      simpleSlide.style.transition = '0ms';
      simpleMarginLeftValue = (simpleSlideIndex + 2) * (-170);
      simpleSlide.style.marginLeft = simpleMarginLeftValue + "px";
    },500);
  }
}
