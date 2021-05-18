window.onloadend = document.querySelector(".sidebar-market__header").addEventListener("click", openCloseFilters);
let filters = document.querySelector(".sidebar-market__container");

function openCloseFilters() {
    filters.classList.toggle("sidebar-market__container_hidden");
}