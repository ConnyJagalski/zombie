import { meals, habitants } from './data';

export class Shelter {
    constructor(
        private hunger: number = 0,
        private stock: number = 100
    ) {};

    public getHunger(): number {
        return this.hunger;
    };

    public setHunger(value: number): void {
        this.hunger = value;
    };

    public getStock(): number {
        return this.stock;
    };

    public setStock(value: number): void {
        this.stock = value;
    };
};

export class Habitant {
    private static questions1: string[] = ["Wie voll ist dein Vorrat?",
                        "Wie groß ist dein Hunger?"];
    private static questions2: string[] = ["Bist du Vegetarier?",
                        "Hast du eine Glutenunverträglichkeit?",
                        "Verträgst du Milchprodukte?",
                        "Bist du Diabetiker?"
    ];

    constructor(
        private name: string,
        private hunger: number = 0,
        private stock: number = 100,
        private veggie: boolean,
        private diabetes: boolean,
        private gluten: boolean,
        private lactose: boolean
    ) {};

    public getName(): string {
        return this.name;
    };

    public getHunger(): number {
        return this.hunger;
    };

    public setHunger(value: number): void {
        this.hunger = value;
    };

    public getStock(): number {
        return this.stock;
    };

    public setStock(value: number): void {
        this.stock = value;
    };

    public static getQuestions1(index: number) {
        return this.questions1[index];
    };

    public static getQuestions2(index: number) {
        return this.questions2[index];
    };
};

export class Food {
    constructor(
        private name: string,
        private veggie: boolean,
        private gluten: boolean,
        private sweet: boolean,
        private milk: boolean
    ) {};

    public getName(): string {
        return this.name;
    };

    public getVeggie(): boolean {
        return this.veggie;
    };

    public getGluten(): boolean {
        return this.gluten;
    };

    public getSweet(): boolean {
        return this.sweet;
    };

    public getMilk(): boolean {
        return this.milk;
    };
};