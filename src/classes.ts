import * as data from "./data.js";
import * as start from "./startGame.js";

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
    constructor(
        private name: string,
        private hunger: number = 0,
        private stock: number = 100,
        private rats: boolean = false,
        private veggie: boolean,
        private diabetes: boolean,
        private gluten: boolean,
        private lactose: boolean,
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

    constructor() {
        this.shelter = new Shelter();
        this.habitants = start.generateHabitants(data.habitants);
    };

    public getShelter(): Shelter {
        return this.shelter;
    };

    public getHabitants(): Habitant[] {
        return this.habitants;
    };
};