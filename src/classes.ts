import * as data from "./data.js";
import * as start from "./start.js";

export class Shelter {
    constructor(
        private hunger: number = 0,
        private stock: number = 100,
        private infected: number = 0
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

    public getInfected(): number {
        return this.infected;
    };

    public setInfected(value: number): void {
        this.infected = value;
    };
};

export class Habitant {
    constructor(
        private name: string,
        private hunger: number = 0,
        private stock: number = 100,
        private rats: boolean = false,
        private veggie: boolean,
        private diabetes: boolean,
        private gluten: boolean,
        private lactose: boolean,
        private poisonCount: number = 0
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

    public getRats(): boolean {
        return this.rats;
    };

    public setRats(value: boolean): void {
        this.rats = value;
    };

    public getVeggie(): boolean {
        return this.veggie;
    };

    public getDiabetes():boolean {
        return this.diabetes;
    };

    public getGluten(): boolean {
        return this.gluten;
    };

    public getLactose(): boolean {
        return this.lactose;
    };

    public getPoisonCount(): number {
        return this.poisonCount;
    };

    public increasePoisonCount(): void {
        const currentPoisonCount = this.poisonCount;

        this.poisonCount = currentPoisonCount + 1;
    }
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

export class Game {
    private readonly shelter: Shelter;
    private readonly habitants: Habitant[];
    private readonly food: Food[];

    constructor() {
        this.shelter = new Shelter();
        this.habitants = start.generateHabitants(data.habitants);
        this.food = start.generateFood(data.meals);
    };

    public getShelter(): Shelter {
        return this.shelter;
    };

    public getHabitants(): Habitant[] {
        return this.habitants;
    };

    public getFood(): Food[] {
        return this.food;
    };
};