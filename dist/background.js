import * as classes from "./classes.js";
import * as helpers from "./helpers.js";
import * as start from "./start.js";
import * as round from "./round.js";
import * as endGame from "./end.js";
export const gameState = {
    current: null
};
export const habitantState = {
    current: null
};
export const shelterState = {
    current: null
};
export const foodState = {
    current: null
};
export const allHabitantsDom = { current: null };
export function startGame() {
    document.getElementById("start-game").setAttribute("disabled", "");
    gameState.current = new classes.Game();
    habitantState.current = gameState.current.getHabitants();
    shelterState.current = gameState.current.getShelter();
    foodState.current = gameState.current.getFood();
    start.sabotageHabitant(habitantState.current);
    start.showHabitants(habitantState.current);
    helpers.calcStatus(habitantState.current, shelterState.current);
    helpers.showStatus(shelterState.current);
    allHabitantsDom.current = document.querySelectorAll(".habitant-container");
}
;
export function chooseHabitant(event) {
    round.disableOthers(event);
}
;
export function newRound() {
    round.enableAll();
    start.sabotageHabitant(habitantState.current);
    helpers.calcStatus(habitantState.current, shelterState.current);
    helpers.showStatus(shelterState.current);
}
export function end(ergebnis = "Verloren") {
    helpers.calcStatus(habitantState.current, shelterState.current);
    alert(`Ergebnis: ${ergebnis} \n
         Hunger: ${shelterState.current.getHunger()} \n
         Vorräte: ${shelterState.current.getStock()} \n
         Bewohner mit Rattenplage: ${shelterState.current.getInfected()}`);
    endGame.resetGame();
}
//# sourceMappingURL=background.js.map