import * as classes from "./classes.js";
import * as background from "./background.js";
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
export function showStatus(shelter) {
    const hunger = shelter.getHunger();
    const stock = shelter.getStock();
    domHungerBar.style.setProperty('--fill-level', `${hunger}%`);
    domStockBar.style.setProperty('--fill-level', `${stock}%`);
}
;
export function calcStatus(habitants, shelter) {
    let totalHunger = 0;
    let totalStock = 0;
    let totalInfected = 0;
    habitants.forEach(element => {
        const hunger = element.getHunger();
        const stock = element.getStock();
        if (hunger === 100 && stock === 0) {
            background.end("Verloren");
        }
        ;
        if (element.getRats()) {
            totalInfected++;
        }
        ;
        const relativeHunger = hunger * 0.1;
        const relativeStock = stock * 0.1;
        totalHunger = totalHunger + relativeHunger;
        totalStock = totalStock + relativeStock;
    });
    shelter.setInfected(totalInfected);
    shelter.setHunger(totalHunger);
    shelter.setStock(totalStock);
}
;
export function takeStock() {
    background.habitantState.current.forEach(habitant => {
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