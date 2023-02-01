import './style.css'
import javascriptLogo from './javascript.svg'
import { Login } from "./pages/Login/Login";
import { dashboardTemplate } from './pages/Dashboard/Dashboard';

const header = document.querySelector("header");
header.innerHTML = Login();

/*if(localStorage.getItem.length < 0){
header.innerHTML = Login();}
else{
header.innerHTML = dashboardTemplate
}*/
