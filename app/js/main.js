let navMenu = document.querySelector(".header__nav-menu");


const mediaSmallScreen = window.matchMedia("(max-width: 750px)");
const mediaDesktopScreen = window.matchMedia("(min-width: 751px)");

function toSmallHeader(e) {
    if (e.matches) {
        navMenu.prepend(document.querySelector(".top__sign-links"));
        navMenu.append(document.querySelector(".top__faq"));
    }
}

function toDesktopHeader(e) {
    if (e.matches) {
        let top = document.querySelector(".header__top");

        top.prepend(navMenu.querySelector(".top__faq"));
        top.append(navMenu.querySelector(".top__sign-links"));
        navMenu.classList.remove("nav-menu_hidden");
    }
}
mediaSmallScreen.addListener(toSmallHeader);
mediaDesktopScreen.addListener(toDesktopHeader);
toSmallHeader(mediaSmallScreen);


function openCloseMenu() {
    navMenu.classList.toggle("nav-menu_visible");
}
