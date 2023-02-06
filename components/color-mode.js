import "./color.mode.css"

export const templateColor = () => 
     `
    <button id="themeBtn"> Cambiar color de fondo 🎨</button>`;
  ;


const randomNum = () => {
    return(Math.round((Math.random() * 255) +1));
}

document.body.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;

export const changeTheme = () => {
    const themeBtn = document.querySelector("#themeBtn");
    themeBtn.addEventListener("click", () => {
        document.body.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
    });
  };
  
/* Función previa que sacar para ver el camino pero que luego descarte porque me daba fallos al intentar ejecutar directamente.

const randomColor = () => {
    let BGValue = `rgb (${randomNum()},${randomNum()}, ${randomNum()})`;
    return BGValue;
};*/

/* Comprobando en consola que me saca los valores que quiero. 

console.log(randomNum());
console.log(document.body.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`);*/


/*export const changeColor = () => {
    const colorBtn = document.querySelector("#colorBtn");
    colorBtn.addEventListener("click", () => {
        console.log(document.body.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`);
        //document.body.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
    })
  };*/
  

/*const body = document.querySelector("body[el atributo de la clase, pero el selector seria el elemento]");
body*/

//hacer un addevent y que al pusar añada a classList una clase, */


//console.log(randomNum());

/*const randomColor = () => {
let randomNum = Math.round((Math.random() * 255) +1);
console.log(randomNum);
let BGValue = `rgb (${randomNum},${randomNum}, ${randomNum})`;
console.log(BGValue);
};

randomColor()

*/

/* const randomColor = () => {
let randomNum = Math.round(Math.random * 255);
//console.log(randomNum());
console.log(`rgb (${randomNum()},${randomNum()}, ${randomNum()}`)
}
randomColor();
   */





/* Addeventlistener */

/*import "./color.mode.css"

export const templateColor = () => 
     `
    <button id="BGcolor> Cambiar color de fondo </button>`;
  ;

const randomColor = () => {
let randomNum = Math.round((Math.random() * 255)+1);
console.log(randomNum)
//const rgb = 
};

randomColor();

export const changeColor = () => {
    const BGcolor = document.querySelector("#BGcolor");
    const body = document.querySelector("body");
    let localData = [];
    BGcolor.addEventListener("click", () => {
       
    
    })};
/* Tengo que hacer que se ejecute randomColor en cada 
Tengo que meter el nuevo color como clase con un estilo determinado o meterlo dentro del listener rollo al clicar creame esta clase en el body */