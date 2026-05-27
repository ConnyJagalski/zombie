import * as classes from "./classes.js";
import * as backgroundFunctions from "./backgroundFunctions.js";
export const domHungerBar = document.getElementById("hunger-bar");
export const domStockBar = document.getElementById("stock-bar");
export const domHabitants = document.getElementById("habitants");
export function random(length) {
    return Math.floor(Math.random() * length);
}
;
export function randomBoolean(length) {
    return random(length) < 6;
}
;
export function generateFood(meals) {
    return Object.values(meals).map((value) => {
        return new classes.Food(value.name, value.veggie, value.gluten, value.sweet, value.milk);
    });
}
;
export function showStatus(currentShelter) {
    const hunger = currentShelter.getHunger();
    const stock = currentShelter.getStock();
    domHungerBar.style.setProperty('--fill-level', `${hunger}%`);
    domStockBar.style.setProperty('--fill-level', `${stock}%`);
}
;
export function showValue(event) {
    const button = event.currentTarget;
    const valueSpan = button.nextElementSibling;
    valueSpan.style.visibility = "visible";
}
;
export function calcStatus(currentHabitants, currentShelter) {
    let totalHunger = 0;
    let totalStock = 0;
    currentHabitants.forEach(elemet => {
        const relativeHunger = elemet.getHunger() * 0.1;
        const relativeStock = elemet.getStock() * 0.1;
        totalHunger = totalHunger + relativeHunger;
        totalStock = totalStock + relativeStock;
    });
    currentShelter.setHunger(totalHunger);
    currentShelter.setStock(totalStock);
}
;
export function disableOthers(event) {
    backgroundFunctions.allHabitantsDom.current.forEach(element => {
        const target = event.currentTarget;
        if (element.id !== target.id) {
            element.classList.add("disabled");
        }
        else {
            element.classList.add("chosen");
        }
    });
}
;
export function enableAll() {
    backgroundFunctions.allHabitantsDom.current.forEach(element => { element.classList.remove("disabled", "chosen"); });
}
;
export function hungerForward() {
    backgroundFunctions.habitantState.current.forEach(habitant => {
        const currentHunger = habitant.getHunger();
        habitant.setHunger(currentHunger + 1);
    });
}
;
//# sourceMappingURL=helpers.js.map