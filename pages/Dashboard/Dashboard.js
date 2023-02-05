import "./Dashboard.css"
import { initContent } from "../../main";

//Creamos la template de esta página y la exportamos para poder utilizarla en el main.js
export const dashboardTemplate = () => `
      <section class="login">
      <h1> Hey darling! Welcome to the Play Hub¡</h1> 
      <ul> 
      <li> <a id="pokedex" href="#"> Pokedex </a> </li>
      <li> <a id="memoryGame" href="#">Memory Game</a> </li>
      </ul>
      </section>`;

export const printDashboard = () => {
      const main = document.querySelector("main");
      main.innerHTML = dashboardTemplate();
      addListeners();
      };
          
const addListeners = () => {
  document.querySelector("#pokedex").addEventListener("click", () => 
    initContent("Pokedex"));
  document.querySelector("#memorygame")
    //.addEventListener("click", () => initContent("MemoryGame"));
};



