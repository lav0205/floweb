const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("data-slider-container]");
const sliderPrevBtn = document.querySelector("data-slider-prev]");
const sliderNextBtn = document.querySelector("data-slider-next]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));

let totalSlidableItems = sliderContainer.childElementCount -totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function(){
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}


const slideNext = function(){
    const slideEnd = currentSlidePos >= totalSlidableItems;

    if(slideEnd){
        currentSlidePos = 0;
    }else{
        currentSlidePos++;
    }

    moveSliderItem();
}


sliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function(){
    if(currentSlidePos <= 0){
        currentSlidePos = totalSlidableItems;
    }else{
        currentSlidePos++;
    }

    moveSliderItem();
}

sliderNextBtn.addEventListener("click", slidePrev);

window.addEventListener("resize", function(){
    let totalSliderVisibleItems = Number(this.getComputedStyle(slider).getPropertyValue("--slider-items"));
    totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

    moveSliderItem();
});