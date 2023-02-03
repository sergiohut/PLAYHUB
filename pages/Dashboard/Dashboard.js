import "./Dashboard.css"
import { pokedexTemplate } from "../Pokedex/Pokedex"
import { printPokedex } from "../Pokedex/Pokedex";

//Creamos la template de esta página y la exportamos para poder utilizarla en el main.js
export const dashboardTemplate = () => `
      <section class="login">
      <h1> Hey darling! Welcome to the Play Hub</h1> 
      <ul> 
      <li> <a id="pokedex" href="#"> Pokedex </a> </li>
      <li> <a id="memoryGame" href="#">Memory Game</a> </li>
      </ul>
      </section>`;

const addListeners = () => {
      document
      .querySelector("#pokedex")
      .addEventListener("click", () => pokedexTemplate());
      };

export const printDashboard = () => {
      const main = document.querySelector("main");
      main.innerHTML = dashboardTemplate();
      addListeners();
      };
          

      

/*export const addLisDash = () => {
      const pokedexAnchor = document.querySelector("#pokedex");
      pokedexAnchor.addEventListener("click", () => {
          console.log("Funciona asi")})};
    ;
    addLisDash();*/

//Creamos la funcionalidad para que al hacer clic en los anchor nos ejecute la correspondiente initContent que nos pintara la vista que corresponda 
/*const addListeners = () => {
      document
      .querySelector("#pokedex")
      .addEventListener("click", () => console.log("esto funciona"));
      document
      .querySelector("#memoryGame")
      .addEventListener("click", () => initContent("MemoryGame"));
      };

export const printDashboard = () => {
      document.querySelector("main").innerHTML = dashboardTemplate();
      addListeners();
      };*/

     

     // console.log(document.querySelector("#pokedex"))

      /*const anchorListener = () => {
            document.querySelector("#pokedex").addEventListener("click", () => {
            console.log("HEY!")})}*/

/*export const anchorListener = () => {
      const pokedexAnchor = document.querySelector("#pokedex");
      pokedexAnchor.addEventListener("click", () => {
      console.log("Hey funciona?");
})}

      anchorListener();*/



