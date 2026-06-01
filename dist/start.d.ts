import * as classes from "./classes.js";
export declare function generateHabitants(names: string[]): classes.Habitant[];
export declare function generateFood(meals: object): classes.Food[];
export declare function createDataRow(titleText: string, name: string, valueText: any): {
    row: HTMLDivElement;
    title: HTMLButtonElement;
    value: HTMLSpanElement;
};
export declare function createHabitantElement(input: classes.Habitant): HTMLElement;
export declare function showHabitants(habitant: classes.Habitant[]): void;
export declare function sabotageHabitant(habitant: classes.Habitant[]): void;
//# sourceMappingURL=start.d.ts.map