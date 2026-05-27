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
export function takeStock() {
    backgroundFunctions.habitantState.current.forEach(habitant => {
        const hunger = habitant.getHunger();
        const stock = habitant.getStock();
        if (hunger > 24) {
            if (stock >= hunger) {
                habitant.setStock(stock - hunger);
                habitant.setHunger(0);
            }
            else {
                habitant.setStock(0);
                habitant.setHunger(hunger - stock);
            }
        }
    });
}
;
//# sourceMappingURL=helpers.js.map