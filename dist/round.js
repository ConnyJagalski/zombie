import * as backgroundFunctions from "./background.js";
import * as helpers from "./helpers.js";
import * as classes from "./classes.js";
export function showValue(event) {
    const button = event.currentTarget;
    const valueSpan = button.nextElementSibling;
    valueSpan.style.visibility = "visible";
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
    const button = document.querySelectorAll(".status-button");
    [...button].forEach(element => {
        element.removeAttribute("disabled");
    });
}
;
export function hungerForward() {
    backgroundFunctions.habitantState.current.forEach(habitant => {
        const hunger = habitant.getHunger();
        if (hunger < 100) {
            habitant.setHunger(hunger + 1);
        }
        helpers.takeStock();
    });
}
;
export function checkMeal(mealName, habitant) {
    const stock = habitant.getStock();
    if (mealName === "Haferbrei") {
        if (stock < 51) {
            habitant.setStock(stock + 50);
        }
        else {
            habitant.setStock(100);
        }
    }
    else if ((mealName === "Schnitzel mit Pommes" && habitant.getVeggie() === false && habitant.getGluten() === false) ||
        (mealName === "Milchreis mit heißen Kirschen" && habitant.getDiabetes() === false && habitant.getLactose() === false) ||
        (mealName === "Spaghetti Sahnesauce" && habitant.getGluten() === false && habitant.getLactose() === false)) {
        habitant.setStock(100);
    }
    else {
        poisonHabitant(habitant);
    }
    ;
}
;
export function givePoison(habitant) {
    if (habitant.getRats() === true) {
        habitant.setRats(false);
    }
    else {
        poisonHabitant(habitant);
    }
    ;
}
;
export function poisonHabitant(habitant) {
    const hunger = habitant.getHunger();
    if (hunger < 81) {
        habitant.setHunger(hunger + 20);
    }
    else {
        habitant.setHunger(100);
    }
    ;
}
//# sourceMappingURL=round.js.map