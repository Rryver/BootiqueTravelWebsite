let modal = document.getElementById("modal-trip");
document.querySelector(".modal-trip__button-close").addEventListener("click", closeModal);

window.onload = addListenersToComments();

function addListenersToComments() {
    let comments = document.getElementsByClassName("comment__content");
    [...comments].forEach(
        (element) => {
            element.addEventListener("click", openModal);
        }
    );
}


function openModal() {
    modal.style.display = "block";
    let clickTarget = event.target;

    if (clickTarget.classList.contains("comment__content")) {
        addContentToModal(clickTarget.parentElement.cloneNode(true));
    }
    if (clickTarget.parentElement.classList.contains("comment__content")) {
        addContentToModal(clickTarget.parentElement.parentElement.cloneNode(true));
    }
}

function addContentToModal(element) {
    console.log(element);
    element.removeEventListener("click", openModal);

    let content = modal.querySelector(".modal-trip__content");
    content.innerHTML = "";
    content.append(element);
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};