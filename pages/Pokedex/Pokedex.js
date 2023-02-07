import "./Pokedex.css"
import { initContent } from "../../main";



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

      
export const printPokedex = () => {
  document.querySelector("main").innerHTML = pokedexTemplate();
  getData();
};




const BASEURL = "https://pokeapi.co/api/v2/pokemon/";
const searchInput = document.querySelector("#searchInput");
let data;
let info;
const allCharacters = [];


const appendData = () => {
  const galleryContainer = document.querySelector(".gallery-container");
  const figure = document.createElement("figure");
  figure.innerHTML = `
  <img src=${data.sprites.other.dream_world.front_default} alt=${data.name}" />
  <h3>${data.name}</h3>
  <p>#${data.id}</p>
  `;
  galleryContainer.appendChild(figure);
}

//Hacemos un bucle de peticiones
//Puseamos los datos en un array vacio dentro del bucle, 
const getData = async () => {
  for(let i=1; i<=150;i++){
  info = await fetch(`${BASEURL}${i}`);
  data = await info.json();
  //console.log("ASYNCAWAIT", data);
  allCharacters.push(data);
  appendData();
  //console.log(data.name)
  const searchInput = document.querySelector("#searchInput");
  const searchBtn = document.querySelector("#searchBtn");
  
  searchBtn.addEventListener("click", () => filterCharacters(allCharacters));
  
  const filterCharacters = (characters) => {
    const filteredCharacters = characters.filter((character) => (
      character.name.toLowerCase().includes(searchInput.value.toLowerCase())
  ))
  foundCharacters(filteredCharacters)};
  
  const foundCharacters = (characters) => {
    const galleryContainer = document.querySelector(".gallery-container");
    galleryContainer.innerHTML = "";
    characters.forEach(character => {
      const figure = document.createElement("figure");
      figure.innerHTML = `
      <img src=${character.sprites.other.dream_world.front_default} alt=${character.name}" />
      <h3>${character.name}</h3>
      <p>#${character.id}</p>
      `;
      galleryContainer.appendChild(figure);
    })
  }
}}

getData();

/*const showAll = () => {
  const allBtn = document.querySelector("#allBtn");
  allBtn.addEventListener("click", () => {
    initContent("Pokedex");
  });
};

showAll();

 /* const getData = () => {
    for(let i=1; i<=150;i++){
    axios.get(`${BASEURL}${i}`)
    .then((res) => {
  //console.log(res); 
  //Para comprobar que los datos son manejables. 
    data = res.data;
    allCharacters.push(data);
    //console.log(data.name)
    const myTimeout = setTimeout(appendData(), 2000);});
    const searchInput = document.querySelector("#searchInput");
    const searchBtn = document.querySelector("#searchBtn");
    
    searchBtn.addEventListener("click", () => filterCharacters(allCharacters));
    
    const filterCharacters = (characters) => {
      const filteredCharacters = characters.filter((character) => (
        character.name.toLowerCase().includes(searchInput.value.toLowerCase())
    ))
    foundCharacters(filteredCharacters)};
    
    const foundCharacters = (characters) => {
      const galleryContainer = document.querySelector(".gallery-container");
      galleryContainer.innerHTML = "";
      characters.forEach(character => {
        const figure = document.createElement("figure");
        figure.innerHTML = `
        <img src=${character.sprites.other.dream_world.front_default} alt=${character.name}" />
        <h3>${character.name}</h3>
        <p>${character.id}</p>
        `;
        galleryContainer.appendChild(figure)
      })
    }
  }
  };*/







/*
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", () => filterCharacters(allCharacters));

const filterCharacters = (characters) => {
  const filteredCharacters = characters.filter((character) => (
    character.name.toLowerCase().includes(searchInput.value.toLowerCase())
))
foundCharacters(filteredCharacters)};

const foundCharacters = (characters) => {
  const galleryContainer = document.querySelector(".gallery-container");
  galleryContainer.innerHTML = "";
  characters.forEach(character => {
    const figure = document.createElement("figure");
    figure.innerHTML = `
    <img src=${character.sprites.other.dream_world.front_default} alt=${character.name}" />
    <h3>${character.name}</h3>
    <p>${character.id}</p>
    `;
    galleryContainer.appendChild(figure)
  })
}*/



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
