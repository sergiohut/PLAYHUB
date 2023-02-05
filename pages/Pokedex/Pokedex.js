import "./Pokedex.css"
import axios from "axios";

export const pokedexTemplate = () => 
     `
      <section class="login">
        <div>
            <h1> Pokedex</h1>
            <input type="text" id="searchInput">
            <button id="searchBtn">Buscar</button>
            <div class="gallery-container"></div> 
        </div id="app"> 
      </section>`;

      //No sé muy bien cuando poner id o class, creo que  class es si necesitamos un conjunto de objectos que hagan una cosa
  
const BASEURL = "https://pokeapi.co/api/v2/pokemon/";

let data;

//Vamos a probar con un pokemon mediante   
/*const getData = () => {
  //Concatenamos la baseURL y el tipo (characters, droids, locations,...)
  axios.get(`${BASEURL}1`)
  .then((res) => {
//console.log(res); 
//Para comprobar que los datos son manejables. 
  data = res.data;
//console.log(data)
//console.log(data.name)
//console.log(data.sprites.other.dream_world.front_default); 
//Para comprobar que almacenamos lo que queremos. 
  appendData()});
};*/

//Vamos a probar con los 5 primeros pokemons 
//Si sale pasamos a 150 

  const getData = () => {
    for(let i=1; i<=150;i++){
    axios.get(`${BASEURL}${i}`)
    .then((res) => {
  //console.log(res); 
  //Para comprobar que los datos son manejables. 
    data = res.data;
    appendData()});
  }
  };




const appendData = () => {
  const galleryContainer = document.querySelector(".gallery-container");
  const figure = document.createElement("figure");
  figure.innerHTML = `
  <img src=${data.sprites.other.dream_world.front_default} alt=${data.name}" />
  <h3>${data.name}</h3>
  <p>${data.id}</p>
  `;
  galleryContainer.appendChild(figure);
  //galleryContainer.appendChild(figure);
  console.log(figure);
}

//<figcaption>${item.description}</figcaption>

export const printPokedex = () => {
  document.querySelector("main").innerHTML = pokedexTemplate();
  getData();
};







/* PRUEBA CON ASYNC AWAIT 
const getCharacters = async () => {
  const res = await fetch(BASE_URL/1);
  const data = await res.json();
  const characters = data[forms];
  console.log(characters);
}*/


//función asincrona que hace el fetch a la API y lo convierte a JSON. 
/*for(let i=1; i<=10;i++){
  const getCharacters = async () => {
    const res = await fetch(BASE_URL/`${i}`);
    const data = await res.json();
    const characters = data;
    mapCharacters(characters);
  }};*/

/*const mapCharacters = (characters) => {
  characters.CharactersList = characters.map((character) => ({
      id: character.id,
      name: character.name,
      image: character.sprites.other.dream_world.front_default,
    }));

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