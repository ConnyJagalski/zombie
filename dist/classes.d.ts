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
    private veggie;
    private diabetes;
    private gluten;
    private lactose;
    private static questions1;
    private static questions2;
    constructor(name: string, hunger: number | undefined, stock: number | undefined, veggie: boolean, diabetes: boolean, gluten: boolean, lactose: boolean);
    getName(): string;
    getHunger(): number;
    setHunger(value: number): void;
    getStock(): number;
    setStock(value: number): void;
    static getQuestions1(index: number): string | undefined;
    static getQuestions2(index: number): string | undefined;
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
//# sourceMappingURL=classes.d.ts.map