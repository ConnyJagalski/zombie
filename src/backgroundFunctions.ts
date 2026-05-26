import * as classes from "./classes.js";
import * as helpers from "./helpers.js";

export function startGame() {
    const currentGame = new classes.Game();
    const currentHabitants = currentGame.getHabitants();
    const currentShelter = currentGame.getShelter();
    const currentFood = currentGame.getFood();
    helpers.sabotageHabitant(currentHabitants);
    helpers.showHabitants(currentHabitants);
    helpers.calcStatus(currentHabitants, currentShelter);
    helpers.showStatus(currentShelter);
};