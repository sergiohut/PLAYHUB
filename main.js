import './style.css'

import { templateColor } from './components/color-mode';
import { changeTheme } from './components/color-mode';
import { printDashboard } from './pages/Dashboard/Dashboard';
import { printPokedex } from './pages/Pokedex/Pokedex';
import { printLogin } from './pages/Login/Login';
import { printMemoryGame } from './pages/MemoryGame/MemoryGame';



const header = document.querySelector("header");
header.innerHTML = templateColor();

changeTheme();

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
