import "./Dashboard.css"
import { initContent } from "../../main";

//Creamos la template de esta página y la exportamos para poder utilizarla en el main.js
export const dashboardTemplate = () => `
      <section class="login">
      <h1> Hola ${localStorage.getItem("UserName").slice(2, -2)}! Bienvenido al Play Hub!</h1> 
      <h2> Echa un vistazo a nuestros juegos</h2> 
      <ul> 
      <li> <a id="pokedex" href="#"> Pokedex <img src="https://res.cloudinary.com/ddu2qdsdp/image/upload/v1675700412/Varios/pokedex_jy4uwm.png"></a> </li>
      </ul>
      </section>`;

// SI ESO HAGO UNA GALERIA DE MAESTRAS POKEMONS 
export const printDashboard = () => {
      const main = document.querySelector("main");
      main.innerHTML = dashboardTemplate();
      addListeners();
      };
          
const addListeners = () => {
  document.querySelector("#pokedex").addEventListener("click", () => 
    initContent("Pokedex"));
  /*document.querySelector("#memoryGame").addEventListener("click", () => 
  initContent("MemoryGame"));*/
    //.addEventListener("click", () => initContent("MemoryGame"));
};



