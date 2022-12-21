const sliders = document.querySelectorAll(".slider");

const funcInit = (currentSlider) => {
  const slideContainer = document.querySelector(".slider-container");
  const nextSlideBtn = document.querySelector(".next");
  const prevSlideBtn = document.querySelector(".prev");

  const totalSlideVisibleItem = Number(
    getComputedStyle(currentSlider).getPropertyValue("--slide-item")
  );

  const totalSlideItem =
    slideContainer.childElementCount - totalSlideVisibleItem;

  let slideCurrentPos = 0;

  //   next

  const nextSlide = () => {
    slideCurrentPos++;
    slideContainer.style.transform = `translateX(-${slideContainer.children[slideCurrentPos].offsetLeft}px)`;
    if (slideCurrentPos >= totalSlideItem)
      nextSlideBtn.setAttribute("disabled", "");
    prevSlideBtn.removeAttribute("disabled", "");
  };

  nextSlideBtn.addEventListener("click", nextSlide);

  //   prev
  const prevSlide = () => {
    slideCurrentPos--;
    slideContainer.style.transform = `translateX(-${slideContainer.children[slideCurrentPos].offsetLeft}px)`;
    if (slideCurrentPos <= 0) prevSlideBtn.setAttribute("disabled", "");
    nextSlideBtn.removeAttribute("disabled", "");
  };

  prevSlideBtn.addEventListener("click", prevSlide);
  //   dont have extra item
  const dontHaveExtraItem = totalSlideItem <= 0;
  if (dontHaveExtraItem) nextSlideBtn.setAttribute("disabled", "");
  prevSlideBtn.setAttribute("disabled", "");
};

for (let i = 0; i < sliders.length; i++) {
  funcInit(sliders[i]);
}
