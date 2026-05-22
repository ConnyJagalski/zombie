import { meals, habitants } from './data';
class Shelter {
    hunger;
    stock;
    constructor(hunger, stock) {
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
class Habitant {
    name;
    hunger;
    stock;
    static questions1 = ["Wie voll ist dein Vorrat?",
        "Wie groß ist dein Hunger?"];
    static questions2 = ["Bist du Vegetarier?",
        "Hast du eine Glutenunverträglichkeit?",
        "Verträgst du Milchprodukte?",
        "Bist du Diabetiker?"
    ];
    constructor(name, hunger = 0, stock = 100) {
        this.name = name;
        this.hunger = hunger;
        this.stock = stock;
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
class Food {
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
//# sourceMappingURL=script.js.map