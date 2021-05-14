let navMenu = document.querySelector(".header__nav-menu");


const menuMediaQuery = window.matchMedia("(max-width: 750px)");
function changeHeader(e) {
    if (e.matches) {
        //let navMenu = document.querySelector(".header__nav-menu");

        navMenu.classList.add("nav-menu_hidden");
        navMenu.prepend(document.querySelector(".top__sign-links"));
        navMenu.append(document.querySelector(".top__faq"));
    }
}

menuMediaQuery.addListener(changeHeader);
changeHeader(menuMediaQuery);



function openCloseMenu() {
    navMenu.classList.toggle("nav-menu_hidden");
}