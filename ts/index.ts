//import Rocket, Astronaut, Cargo
import {Rocket} from "./rocket.js";
import { Astronaut } from "./astronaut.js";
import { Cargo } from "./cargo.js";

let choice;
let rocketName = window.prompt("Enter rocket name:");
let rocketCapacity = window.prompt("Enter total capacity of rocket:");
//create object of Rocket
let rocket = new Rocket(rocketName,parseInt(rocketCapacity));
do{

choice=window.prompt("1.Add Astronaut \n2.Add Cargo \n3.Exit");
if(choice=="1"){
    let mass = window.prompt("Enter mass of Astronaut");
    let name = window.prompt("Enter name of Astronaut");
    //create object of Astronaut
    let astronaut = new Astronaut(parseInt(mass),name);
    rocket.addAstronaut(astronaut);
}
if(choice=="2"){
    let mass = window.prompt("Enter mass of material");
    let name = window.prompt("Enter name of material");
    //create object of Astronaut
    let astronaut = new Astronaut(parseInt(mass),name);
    rocket.addAstronaut(astronaut);
}
}while(choice!="3");
console.log(rocket.cargoItems);
console.log(rocket.astronauts);







