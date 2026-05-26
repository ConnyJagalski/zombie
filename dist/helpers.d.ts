import * as classes from "./classes.js";
export declare function random(length: number): number;
export declare function randomBoolean(length: number): boolean;
export declare function generateHabitants(names: string[]): classes.Habitant[];
export declare function generateFood(meals: object): classes.Food[];
export declare function showStatus(currentShelter: classes.Shelter): void;
export declare function showValue(event: Event): void;
export declare function createHabitantElement(data: classes.Habitant): HTMLElement;
export declare function showHabitants(currentHabitants: classes.Habitant[]): void;
export declare function sabotageHabitant(currentHabitants: classes.Habitant[]): void;
export declare function calcStatus(currentHabitants: classes.Habitant[], currentShelter: classes.Shelter): void;
//# sourceMappingURL=helpers.d.ts.map