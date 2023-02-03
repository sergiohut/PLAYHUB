import "./Pokedex.css"


export const pokedexTemplate = () => 
     `
      <section class="login">
        <div>
            <h1> Pokedex porfa </h1>
            <input type="text" id="searchInput">
            <button id="searchBtn"> </button>
        </div id="app"> 
      </section>`;
  


export const printPokedex = () => {
  document.querySelector("main").innerHTML = pokedexTemplate();
  addListeners();
};

/*printPokedex();*/



/*const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
let CharactersList = [];

//función para arrancar el resto de funciones será la única que se ejecute en un futuro. 
const init = () => {
    getCharacters();
  };
  
//función asincrona que hace el fetch a la API y lo convierte a JSON. 
const getCharacters = async () => {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    const characters = data;
    mapCharacters(characters);
  };

const mapCharacters = (characters) => {
    characters.CharactersList = characters.map((character) => ({
      id: character.id,
      name: character.name,
      image: character.sprites.other.dream_world.front_default,
    }));
    printCharacters(allCharacters);
  };
init(); */


/* Si al final hago los botoncicos que salen que tengan */