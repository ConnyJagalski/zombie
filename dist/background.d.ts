import * as classes from "./classes.js";
export declare const gameState: {
    current: classes.Game | null;
};
export declare const habitantState: {
    current: classes.Habitant[] | null;
};
export declare const shelterState: {
    current: classes.Shelter | null;
};
export declare const foodState: {
    current: classes.Food[] | null;
};
export declare const allHabitantsDom: {
    current: NodeListOf<HTMLElement> | null;
};
export declare function startGame(): void;
export declare function chooseHabitant(event: Event): void;
export declare function newRound(): void;
export declare function end(ergebnis?: string): void;
//# sourceMappingURL=background.d.ts.map