let slideIndex = 0;


// let imgs = document.getElementsByClassName("images-plugin__images-item");
// imgs.scroll(50);

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
    scrollImageList(images[slideIndex]);
}

//TODO Add right x position after scrolling. Add smooth scroll
function scrollImageList(toElement) {
    let imgList = document.querySelector(".images-plugin__container");
    let leftBorder = getPosition(document.querySelector(".trip__images-plugin"));
    let rightBorder = imgList.offsetWidth;
    // console.log("lisLeftB:  " + leftBorder);
    // console.log("listRightB:  " + rightBorder);
    let imageXPos = getPosition(toElement) - leftBorder;
    // console.log("left:  " + imageXPos);


    let offset = 200;
    if (imageXPos < leftBorder + toElement.offsetWidth) {
        imgList.scrollLeft -= offset;
    }
    if (imageXPos > rightBorder - toElement.offsetWidth - 30) {
        imgList.scrollLeft += offset;
    }
}



// console.log("container:  " + getPosition(document.querySelector(".images-plugin__container")));
// console.log("list:  " + getPosition(document.querySelector(".images-plugin__images-list")));
// console.log("item 2:  " + getPosition(document.getElementsByClassName("images-plugin__images-item")[0]));

// Helper function to get an element's exact position
function getPosition(el) {
    let xPos = 0;

    while (el) {
        if (el.tagName == "BODY") {
            // deal with browser quirks with body/window/document and page scroll
            let xScroll = el.scrollLeft || document.documentElement.scrollLeft;

            xPos += (el.offsetLeft - xScroll + el.clientLeft);
        } else {
            // for all other non-BODY elements
            xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        }

        el = el.offsetParent;
    }
    return xPos;
}