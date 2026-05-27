import * as data from "./data.js";
import * as start from "./startGame.js";
export class Shelter {
    hunger;
    stock;
    constructor(hunger = 0, stock = 100) {
        this.hunger = hunger;
        this.stock = stock;
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
    constructor(name, hunger = 0, stock = 100, rats = false, veggie, diabetes, gluten, lactose) {
        this.name = name;
        this.hunger = hunger;
        this.stock = stock;
        this.rats = rats;
        this.veggie = veggie;
        this.diabetes = diabetes;
        this.gluten = gluten;
        this.lactose = lactose;
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
    constructor() {
        this.shelter = new Shelter();
        this.habitants = start.generateHabitants(data.habitants);
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
}
;
//# sourceMappingURL=classes.js.map