import * as classes from "./classes.js";
import * as helpers from "./helpers.js";
import * as start from "./start.js";
import * as round from "./round.js";
import * as endGame from "./end.js";

export const gameState: { current: classes.Game | null } = {
    current: null
};
export const habitantState: { current: classes.Habitant[] | null } = {
    current: null
};
export const shelterState: { current: classes.Shelter | null } = {
    current: null
};

export const foodState: { current: classes.Food[] | null } = {
    current: null
};

export const allHabitantsDom: { current: NodeListOf<HTMLElement> | null } = { current: null };

export function startGame() {
    document.getElementById("start-game")!.setAttribute("disabled", "");
    
    gameState.current = new classes.Game();
    habitantState.current = gameState.current.getHabitants();
    shelterState.current = gameState.current.getShelter();
    foodState.current = gameState.current.getFood();
    start.sabotageHabitant(habitantState.current);
    start.showHabitants(habitantState.current);
    helpers.calcStatus(habitantState.current, shelterState.current);
    helpers.showStatus(shelterState.current);
    allHabitantsDom.current = document.querySelectorAll(".habitant-container");
};

export function chooseHabitant(event: Event) {
    round.disableOthers(event);
};

export function newRound() {
    round.enableAll();
    start.sabotageHabitant(habitantState.current!);
    helpers.calcStatus(habitantState.current!, shelterState.current!);
    helpers.showStatus(shelterState.current!);
}

export function end(ergebnis: string = "Verloren") {
    helpers.calcStatus(habitantState.current!, shelterState.current!);

    alert(
        `Ergebnis: ${ergebnis} \n
         Hunger: ${parseFloat(shelterState.current!.getHunger().toFixed(1))} \n
         Vorräte: ${shelterState.current!.getStock()} \n
         Bewohner mit Rattenplage: ${shelterState.current!.getInfected()}`
    );

    endGame.resetGame();
}