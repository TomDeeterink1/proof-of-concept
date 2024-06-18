const readButtons = document.querySelector(".read--more");
const details = document.querySelector(".main-detail");
let poparticle = document.querySelectorAll(".event-popup");

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

function makeclick (){
  poparticle.forEach(element => {
    element.addEventListener("click" , popup);
  });
}

function popup(event) {
  
  console.log("hello world"); 
}

makeclick();