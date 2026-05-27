import * as backgroundFunctions from "./backgroundFunctions.js";
import * as helpers from "./helpers.js";

export function showValue(event: Event) {
    const button = event.currentTarget as HTMLElement;
    const valueSpan = button.nextElementSibling as HTMLElement;
    valueSpan.style.visibility = "visible";
};

export function disableOthers(event: Event) {
    backgroundFunctions.allHabitantsDom.current!.forEach(element => {
        const target = event.currentTarget as HTMLElement;

        if(element.id !== target.id) {
            element.classList.add("disabled");
        } else {
            element.classList.add("chosen");
        }
    })
};

export function enableAll() {
    backgroundFunctions.allHabitantsDom.current!.forEach(element => {element.classList.remove("disabled", "chosen")})
};

export function hungerForward() {
    backgroundFunctions.habitantState.current!.forEach(habitant => {
        const currentHunger = habitant.getHunger();
        habitant.setHunger(currentHunger +1);
        helpers.takeStock();
    })
};

export function checkMeal() {};

export function givePoison() {};