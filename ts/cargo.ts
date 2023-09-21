//import payload interface
import { IPayload } from "./payload.js";
//Cargo
class Cargo implements IPayload{
    //constructor
    constructor(public massKg:number,
        public material:string){
            this.massKg=massKg;
            this.material=material;
        }
}
//export class
export{Cargo}