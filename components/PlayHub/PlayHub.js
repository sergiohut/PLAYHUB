import "./PlayHub.css"

import { initContent } from "../../main";

export const templatePlayHubBtn = () => 
     `
    <button id="playHubBtn"> Play Hub</button>`;
  ;

export const playHub = () => {
  
    const playHubBtn = document.querySelector("#playHubBtn");
    playHubBtn.addEventListener("click", () => {
      initContent("Dashboard");
    });
  };


  export const printPlayHubBtn = () => {
    const header = document.querySelector("header");
    const myBtn = document.createElement("div");
    myBtn.innerHTML = `
    <button id="playHubBtn"> Play Hub</button>`;
    header.appendChild(myBtn);
    playHub();
  };
  