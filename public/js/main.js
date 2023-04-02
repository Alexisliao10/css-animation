const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const spidermanModal = document.querySelector("#spidermanModal");
const robbinModal = document.querySelector("#robbinModal");
const batmanModal = document.querySelector("#batmanModal");
const closeX = document.querySelector(".modal__content--closeIcon");
const modalSection = document.querySelector(".modal__content");
const modalPage = document.querySelector(".modal");

button1.addEventListener("click", () => {
  spidermanModal.classList.remove("hidden");
});

document.addEventListener("click", function (event) {
  if (!modalSection.contains(event.target) && event.target !== button1) {
    spidermanModal.classList.add("hidden");
  }
});

closeX.addEventListener("click", function () {
  modalPage.classList.add("hidden");
});
