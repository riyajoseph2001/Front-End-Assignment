//import payload interface, Astronaut, Cargo
import { IPayload } from "./payload.js";
import { Astronaut } from "./astronaut.js";
import { Cargo } from "./cargo.js";
class Rocket {
    cargoItems: Cargo[]=[];
    astronauts: Astronaut[]=[];
    //constructor
    constructor(public name: string,
        public totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    //method sumMass returns sum of all items
    sumMass(items:IPayload[]):number{
        var sum=0;
        items.forEach(function(ipayload){
            sum=sum+ipayload.massKg;
        })
        
        return sum;

    }
    //method currentMassKg return combined mass of astronauts and cargoItems
    currentMassKg():number{
        return this.sumMass(this.astronauts)+this.sumMass(this.cargoItems);
    }
    //method canAdd return true if totalmass is totalCapacity
    canAdd(item: IPayload):boolean{
        if(this.currentMassKg()+item.massKg<=this.totalCapacityKg){
            return true;
        }else{
            return false;
        }

    }
    //method addCargo
    addCargo(cargo:Cargo):boolean{
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }else{
            return false;
        }
    }
    //method addAstronaut
    addAstronaut(astronaut:Astronaut):boolean{
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }else{
            return false;
        }
    }
    

}
//export Rocket class
export{Rocket}