import "./MemoryGame.css"

export const memoryGameTemplate = () => 
     `
      <section class="login">
        <div>
            <h1> Pokedex</h1>
            <input type="text" id="searchInput">
            <button id="searchBtn">Buscar</button>
            <div class="gallery-container"></div> 
        </div id="app"> 
      </section>`;


export const printMemoryGame= () => {
    document.querySelector("main").innerHTML = memoryGameTemplate();
  };