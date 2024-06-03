const readButtons = document.querySelector(".read--more");
const details = document.querySelector(".main-detail");

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