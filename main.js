import './style.css'
import javascriptLogo from './javascript.svg'
import { template } from "./pages/Login/Login";
import { dashboardTemplate } from './pages/Dashboard/Dashboard';
//import { printDashboard } from './pages/Dashboard/Dashboard';
import { templateColor } from './components/color-mode';
import { changeTheme } from './components/color-mode';
import { printPokedex } from './pages/Pokedex/Pokedex';



const header = document.querySelector("header");
header.innerHTML = templateColor();

changeTheme();

export const initContent = (route) => {
    switch (route) {
      case undefined:
        HomeTemplate();
        break;
      case "Pokedex":
        printPokedex();
        break;
      case "MemoryGame":
        GalleryTemplate();
        break;
    }};

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
