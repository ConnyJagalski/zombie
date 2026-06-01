export declare class Shelter {
    private hunger;
    private stock;
    private infected;
    constructor(hunger?: number, stock?: number, infected?: number);
    getHunger(): number;
    setHunger(value: number): void;
    getStock(): number;
    setStock(value: number): void;
    getInfected(): number;
    setInfected(value: number): void;
}
export declare class Habitant {
    private name;
    private hunger;
    private stock;
    private rats;
    private veggie;
    private diabetes;
    private gluten;
    private lactose;
    private poisonCount;
    constructor(name: string, hunger: number | undefined, stock: number | undefined, rats: boolean | undefined, veggie: boolean, diabetes: boolean, gluten: boolean, lactose: boolean, poisonCount?: number);
    getName(): string;
    getHunger(): number;
    setHunger(value: number): void;
    getStock(): number;
    setStock(value: number): void;
    getRats(): boolean;
    setRats(value: boolean): void;
    getVeggie(): boolean;
    getDiabetes(): boolean;
    getGluten(): boolean;
    getLactose(): boolean;
    getPoisonCount(): number;
    increasePoisonCount(): void;
}
export declare class Food {
    private name;
    private veggie;
    private gluten;
    private sweet;
    private milk;
    constructor(name: string, veggie: boolean, gluten: boolean, sweet: boolean, milk: boolean);
    getName(): string;
    getVeggie(): boolean;
    getGluten(): boolean;
    getSweet(): boolean;
    getMilk(): boolean;
}
export declare class Game {
    private readonly shelter;
    private readonly habitants;
    private readonly food;
    constructor();
    getShelter(): Shelter;
    getHabitants(): Habitant[];
    getFood(): Food[];
}
//# sourceMappingURL=classes.d.ts.map