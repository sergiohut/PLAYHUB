import './style.css'

import { templateColor } from './components/color-mode';
import { changeTheme } from './components/color-mode';
import { printDashboard } from './pages/Dashboard/Dashboard';
import { printPokedex } from './pages/Pokedex/Pokedex';
import { printLogin } from './pages/Login/Login';
import { playHub, printPlayHubBtn } from './components/PlayHub/PlayHub';
import { templatePlayHubBtn } from './components/PlayHub/PlayHub';






const header = document.querySelector("header");
header.innerHTML = templateColor();
changeTheme();


//header.innerHTML += templatePlayHubBtn();
//playHub()


export const initContent = (route) => {
    switch (route) {
      /*case undefined:
        HomeTemplate();
        break;*/
      case "Login":
        printLogin();
        break;
      case "Dashboard":
        printDashboard();
        break;
      case "Pokedex":
        printPokedex();
        //printPlayHubBtn();
        break;
      case "MemoryGame":
        printMemoryGame();
        break;
    }};

//initContent("Login");

if (localStorage.getItem("UserName")){
  initContent("Dashboard")}
else {initContent("Login")};

/*export const initContent = (route) => {
    switch (route) {
        case "Login":
            console.log ("Vamo a veh! Login")
            break;
        case "Dashboard":
            console.log ("Vamo a veh! Login")
            break;


    }
}*/







/*if(localStorage.getItem.length < 0){
header.innerHTML = Login();}
else{
header.innerHTML = dashboardTemplate
}*/
