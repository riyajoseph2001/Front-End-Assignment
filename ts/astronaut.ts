//import payload interface
import { IPayload } from "./payload.js";
//Astronaut
class Astronaut implements IPayload{
    //constructor
    constructor(public massKg:number,
        public name:string){
            this.massKg=massKg;
            this.name=name;
        }
}
//export class Astronaut
export{Astronaut}