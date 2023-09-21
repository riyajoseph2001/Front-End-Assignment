class Rocket {
    //constructor
    constructor(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    //method sumMass returns sum of all items
    sumMass(items) {
        var sum = 0;
        items.forEach(function (ipayload) {
            sum = sum + ipayload.massKg;
        });
        return sum;
    }
    //method currentMassKg return combined mass of astronauts and cargoItems
    currentMassKg() {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }
    //method canAdd return true if totalmass is totalCapacity
    canAdd(item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    }
    //method addCargo
    addCargo(cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    }
    //method addAstronaut
    addAstronaut(astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    }
}
//export Rocket class
export { Rocket };
