export declare class Shelter {
    private hunger;
    private stock;
    constructor(hunger?: number, stock?: number);
    getHunger(): number;
    setHunger(value: number): void;
    getStock(): number;
    setStock(value: number): void;
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
    constructor(name: string, hunger: number | undefined, stock: number | undefined, rats: boolean | undefined, veggie: boolean, diabetes: boolean, gluten: boolean, lactose: boolean);
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
    constructor();
    getShelter(): Shelter;
    getHabitants(): Habitant[];
}
//# sourceMappingURL=classes.d.ts.map