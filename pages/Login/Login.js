
import "./Login.css"
import { dashboardTemplate } from "../Dashboard/Dashboard";


export const template = () => 
     `
      <section class="login">
      <h1> Neoland Hub Games </h1> 
      <h2> Introduce tú nombre </h2>
      <form>
      <input type="text" id="userName" name="userName" required></input>
      <button type="submit" id="loginBtn">Log in</button>
      </form>
      </section>`;
  ;

const main = document.querySelector("main");
main.innerHTML = template();



  /*initContent(login); */

//Esta función genera la template del login que meteremos en el main.js 

export const storage = () => {
    const loginBtn = document.querySelector("#loginBtn");
    const userName = document.querySelector("#userName");
    let localData = [];
    loginBtn.addEventListener("click", () => {
        if (userName.value !== ""){
        localData.push(userName.value);
        localStorage.setItem("UserName", JSON.stringify(localData));
        const main = document.querySelector("main");
        main.innerHTML = dashboardTemplate();
        //console.log("vas o no") para comprobar que la funcionalidad está funcionando al hacer el callback 
    }})};
  ;
  storage()

/*if (localStorage.length > 0) {
  initContent("Dashboard");
};
//Esta función hace que al hacer click en el boton, el valor del input se almacene en el local Storage


  /*convertir en mayusculas luego el h1 si eso para que no afecte al sentido semantico*/