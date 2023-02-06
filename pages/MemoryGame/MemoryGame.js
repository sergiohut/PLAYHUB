import "./MemoryGame.css"

export const memoryGameTemplate = () => 
     `
      <section class="login">
        <div>
            <h1> Memory Game</h1>
            <div class="container">
            <div class="data">
            <div class="score">Score : <span class="scoreBoard">0</span></div>
            <div class="click">Click : <span class="clickBoard">0</span></div>
            </div>
            <div class="grid">
            <div class="popup">
            <button class="playAgain">play Again</button>
            </div>
            </div>
            </div>
            <div class="gallery-container"></div> 
        </div id="app"> 
      </section>
      `;


export const printMemoryGame= () => {
    document.querySelector("main").innerHTML = memoryGameTemplate();
  };

  let cardArray = [ 
    { name: "fries", img: "https://res.cloudinary.com/ddu2qdsdp/image/upload/v1675691750/Drags%20Pokemon%20Trainers/Dakota_Schiffer_PT_m4pqzx.png", }, 
    { name: "fries", img: "https://res.cloudinary.com/ddu2qdsdp/image/upload/v1675691750/Drags%20Pokemon%20Trainers/Dakota_Schiffer_PT_m4pqzx.png", },
    { name: "pizza", img: "https://res.cloudinary.com/ddu2qdsdp/image/upload/v1675691750/Drags%20Pokemon%20Trainers/Bosco_PT_tnamtf.png", },
    { name: "pizza", img: "https://res.cloudinary.com/ddu2qdsdp/image/upload/v1675691750/Drags%20Pokemon%20Trainers/Bosco_PT_tnamtf.png", }, 
    { name: "milkshake", img: "https://res.cloudinary.com/ddu2qdsdp/image/upload/v1675691750/Drags%20Pokemon%20Trainers/Gottmik_PT_qa1aau.png", },
    { name: "milkshake", img: "https://res.cloudinary.com/ddu2qdsdp/image/upload/v1675691750/Drags%20Pokemon%20Trainers/Gottmik_PT_qa1aau.png", }, 
    { name: "ice-cream", img: "https://res.cloudinary.com/ddu2qdsdp/image/upload/v1675691750/Drags%20Pokemon%20Trainers/katya_zamolodchikova_PT_t70aic.png", },
    { name: "ice-cream", img: "https://res.cloudinary.com/ddu2qdsdp/image/upload/v1675691750/Drags%20Pokemon%20Trainers/katya_zamolodchikova_PT_t70aic.png", },
    { name: "hotdog", img: "https://res.cloudinary.com/ddu2qdsdp/image/upload/v1675691751/Drags%20Pokemon%20Trainers/Kim_Chi_PT_qughzk.png", },
    { name: "hotdog", img: "https://res.cloudinary.com/ddu2qdsdp/image/upload/v1675691751/Drags%20Pokemon%20Trainers/Kim_Chi_PT_qughzk.png", },
    { name: "cheeseburger", img: "https://res.cloudinary.com/ddu2qdsdp/image/upload/v1675691751/Drags%20Pokemon%20Trainers/Trixie_Mattel_PT_vrzrj1.png", },
    { name: "cheeseburger", img: "https://res.cloudinary.com/ddu2qdsdp/image/upload/v1675691751/Drags%20Pokemon%20Trainers/Trixie_Mattel_PT_vrzrj1.png", }, 
    ]; 
    
    //define variables and get DOM element
    
    let grid = document.querySelector(".grid"); 
    let scoreBoard = document.querySelector(".scoreBoard"); 
    let popup = document.querySelector(".popup"); 
    let playAgain = document.querySelector(".playAgain"); 
    let clickBoard = document.querySelector(".clickBoard"); 
    let imgs; 
    let cardsId = []; 
    let cardsSelected = []; 
    let cardsWon = 0; 
    let clicks = 0;

    

    document.addEventListener("DOMContentLoaded", function () {
        //define functions 
        
        createBoard(grid, cardArray); 
        arrangeCard();
        playAgain.addEventListener("click", replay); 
        
        //add a click function for images 
        
        imgs = document.querySelectorAll("img");
        Array.from(imgs).forEach(img => 
        img.addEventListener("click", flipCard)
        ) 
        });

        //createBoard function

function createBoard(grid, array) { 
    popup.style.display = "none"; 
    array.forEach((arr, index) => { 
    let img = document.createElement("img"); 
    img.setAttribute("src", "blank.png");
    img.setAttribute("data-id", index); 
    grid.appendChild(img); 
    })
    }
    
    // arrangeCard function
    
    function arrangeCard() { 
    cardArray.sort(() => 0.5 - Math.random())
    }
    
    // flip Card function
    
    function flipCard() { 
    let selected = this.dataset.id;
    cardsSelected.push(cardArray[selected].name); 
    cardsId.push(selected); 
    this.classList.add("flip"); 
    this.setAttribute("src", cardArray[selected].img); 
    if (cardsId.length === 2) { 
    setTimeout(checkForMatch, 500);
    } 
    }

    // checkForMatch function

function checkForMatch() { 
    let imgs = document.querySelectorAll("img"); 
    let firstCard = cardsId[0];
    let secondCard = cardsId[1];
    if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) { 
    alert("you have found a match"); 
    cardsWon += 1; 
    scoreBoard.innerHTML = cardsWon; 
    setTimeout(checkWon,500) 
    } else { 
    imgs[firstCard].setAttribute("src", "blank.png");
    imgs[secondCard].setAttribute("src", "blank.png"); alert("wrong, please try again"); imgs[firstCard].classList.remove("flip"); imgs[secondCard].classList.remove("flip"); 
    } 
    cardsSelected = []; 
    cardsId = []; 
    clicks += 1; 
    clickBoard.innerHTML = clicks; 
    }
    
    function checkWon() {
    if (cardsWon == cardArray.length / 2) {
    alert("You won") 
    setTimeout(()=> popup.style.display = "flex" ,300); 
    }
    }

    // The replay function

function replay() { 
    arrangeCard(); 
    grid.innerHTML = "";
    createBoard(grid, cardArray);
    cardsWon = 0;
    clicks = 0; 
    clickBoard.innerHTML = 0; 
    scoreBoard.innerHTML = 0; 
    popup.style.display = "none"; 
    }