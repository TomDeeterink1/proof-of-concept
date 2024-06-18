const readButtons = document.querySelector(".read--more");
const details = document.querySelector(".main-detail");
let poparticle = document.querySelectorAll(".event-popup");
let dialogs = document.querySelectorAll(".pop-up");

readButtons.addEventListener("click", clicked);

function clicked() {
    if (details.open) {
        details.open = false;
        this.textContent = "Read More";
      } else {
        details.open = true;
        this.textContent = "Read Less";
      }
    
}

function makeclick() {
  poparticle.forEach((element, index) => {
    element.addEventListener("click", () => popup(index));
  });
}

function popup(index) {
  dialogs[index].showModal();
}


makeclick();