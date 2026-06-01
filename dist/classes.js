import * as data from "./data.js";
import * as start from "./start.js";
export class Shelter {
    hunger;
    stock;
    infected;
    constructor(hunger = 0, stock = 100, infected = 0) {
        this.hunger = hunger;
        this.stock = stock;
        this.infected = infected;
    }
    ;
    getHunger() {
        return this.hunger;
    }
    ;
    setHunger(value) {
        this.hunger = value;
    }
    ;
    getStock() {
        return this.stock;
    }
    ;
    setStock(value) {
        this.stock = value;
    }
    ;
    getInfected() {
        return this.infected;
    }
    ;
    setInfected(value) {
        this.infected = value;
    }
    ;
}
;
export class Habitant {
    name;
    hunger;
    stock;
    rats;
    veggie;
    diabetes;
    gluten;
    lactose;
    poisonCount;
    constructor(name, hunger = 0, stock = 100, rats = false, veggie, diabetes, gluten, lactose, poisonCount = 0) {
        this.name = name;
        this.hunger = hunger;
        this.stock = stock;
        this.rats = rats;
        this.veggie = veggie;
        this.diabetes = diabetes;
        this.gluten = gluten;
        this.lactose = lactose;
        this.poisonCount = poisonCount;
    }
    ;
    getName() {
        return this.name;
    }
    ;
    getHunger() {
        return this.hunger;
    }
    ;
    setHunger(value) {
        this.hunger = value;
    }
    ;
    getStock() {
        return this.stock;
    }
    ;
    setStock(value) {
        this.stock = value;
    }
    ;
    getRats() {
        return this.rats;
    }
    ;
    setRats(value) {
        this.rats = value;
    }
    ;
    getVeggie() {
        return this.veggie;
    }
    ;
    getDiabetes() {
        return this.diabetes;
    }
    ;
    getGluten() {
        return this.gluten;
    }
    ;
    getLactose() {
        return this.lactose;
    }
    ;
    getPoisonCount() {
        return this.poisonCount;
    }
    ;
    increasePoisonCount() {
        const currentPoisonCount = this.poisonCount;
        this.poisonCount = currentPoisonCount + 1;
    }
}
;
export class Food {
    name;
    veggie;
    gluten;
    sweet;
    milk;
    constructor(name, veggie, gluten, sweet, milk) {
        this.name = name;
        this.veggie = veggie;
        this.gluten = gluten;
        this.sweet = sweet;
        this.milk = milk;
    }
    ;
    getName() {
        return this.name;
    }
    ;
    getVeggie() {
        return this.veggie;
    }
    ;
    getGluten() {
        return this.gluten;
    }
    ;
    getSweet() {
        return this.sweet;
    }
    ;
    getMilk() {
        return this.milk;
    }
    ;
}
;
export class Game {
    shelter;
    habitants;
    food;
    constructor() {
        this.shelter = new Shelter();
        this.habitants = start.generateHabitants(data.habitants);
        this.food = start.generateFood(data.meals);
    }
    ;
    getShelter() {
        return this.shelter;
    }
    ;
    getHabitants() {
        return this.habitants;
    }
    ;
    getFood() {
        return this.food;
    }
    ;
}
;
//# sourceMappingURL=classes.js.map