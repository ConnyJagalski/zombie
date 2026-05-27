import * as classes from "./classes.js";
import * as helpers from "./helpers.js";
import * as data from "./data.js";
import * as start from "./startGame.js";
export const gameState = {
    current: null
};
export const habitantState = {
    current: null
};
export const shelterState = {
    current: null
};
export const food = data.meals.map(meal => new classes.Food(meal.name, meal.veggie, meal.gluten, meal.sweet, meal.milk));
export const allHabitantsDom = { current: null };
export function startGame() {
    document.getElementById("start-game").setAttribute("disabled", "");
    gameState.current = new classes.Game();
    habitantState.current = gameState.current.getHabitants();
    shelterState.current = gameState.current.getShelter();
    start.sabotageHabitant(habitantState.current);
    start.showHabitants(habitantState.current);
    helpers.calcStatus(habitantState.current, shelterState.current);
    helpers.showStatus(shelterState.current);
    allHabitantsDom.current = document.querySelectorAll(".habitant-container");
}
;
export function chooseHabitant(event) {
    helpers.disableOthers(event);
}
;
export function newRound() {
    helpers.enableAll();
}
//# sourceMappingURL=backgroundFunctions.js.map