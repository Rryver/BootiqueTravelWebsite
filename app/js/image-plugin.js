let slideIndex = 0;

function showSelectedSlide(element) {
    let slides = [...element.parentElement.children];
    let newSlideIndex = slides.indexOf(element);
    setSlidesVisibility(slideIndex,  slideIndex = newSlideIndex);
}

function plusSlide(newIndex) {
    setSlidesVisibility(slideIndex, slideIndex += newIndex);
}

function setSlidesVisibility(oldIndex, newIndex) {
    let slides = document.getElementsByClassName("images-plugin__slide");
    let images = document.getElementsByClassName("images-plugin__images-item");

    if (newIndex > slides.length - 1)
        slideIndex = 0;
    if (newIndex < 0)
        slideIndex = slides.length - 1;

    images[oldIndex].classList.remove("images-plugin__item_is-active");
    images[slideIndex].classList.add("images-plugin__item_is-active");
    slides[oldIndex].classList.remove("images-plugin__slide_visblile");
    slides[slideIndex].classList.add("images-plugin__slide_visblile");
}