
import "./LogOut.css"

export const templateLogOff = () => 
     `
    <button id="lofOutBtn"> Log off </button>`;
  ;

export const logOff = () => {
    const logOffBtn = document.querySelector("#logOutBtn");
    themeBtn.addEventListener("click", () => {
        document.body.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
    });
  };