import { meals, habitants } from './data';
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
    veggie;
    diabetes;
    gluten;
    lactose;
    static questions1 = ["Wie voll ist dein Vorrat?",
        "Wie groß ist dein Hunger?"];
    static questions2 = ["Bist du Vegetarier?",
        "Hast du eine Glutenunverträglichkeit?",
        "Verträgst du Milchprodukte?",
        "Bist du Diabetiker?"
    ];
    constructor(name, hunger = 0, stock = 100, veggie, diabetes, gluten, lactose) {
        this.name = name;
        this.hunger = hunger;
        this.stock = stock;
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
    static getQuestions1(index) {
        return this.questions1[index];
    }
    ;
    static getQuestions2(index) {
        return this.questions2[index];
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
//# sourceMappingURL=classes.js.map