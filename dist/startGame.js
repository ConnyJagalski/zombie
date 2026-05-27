import * as classes from "./classes.js";
import * as helpers from "./helpers.js";
import * as backgroundFunctions from "./backgroundFunctions.js";
export function generateHabitants(names) {
    return names.map(name => {
        return new classes.Habitant(name, undefined, undefined, undefined, helpers.randomBoolean(names.length), helpers.randomBoolean(names.length), helpers.randomBoolean(names.length), helpers.randomBoolean(names.length));
    });
}
;
export function createHabitantElement(data) {
    const habitantContainer = document.createElement("section");
    habitantContainer.id = `habitant-${data.getName()}`;
    habitantContainer.className = "habitant-container";
    habitantContainer.setAttribute("tabindex", "0");
    habitantContainer.addEventListener("click", (e) => backgroundFunctions.chooseHabitant(e));
    const nameParagraph = document.createElement("h3");
    nameParagraph.textContent = data.getName();
    const hungerRow = document.createElement("div");
    hungerRow.className = "value-container";
    const hungerTitle = document.createElement("button");
    hungerTitle.textContent = "Hunger: ";
    const hungerValue = document.createElement("span");
    hungerValue.id = `hunger-${data.getName()}`;
    hungerValue.textContent = `${data.getHunger()}`;
    hungerValue.style.visibility = "hidden";
    const stockRow = document.createElement("div");
    stockRow.className = "value-container";
    const stockTitle = document.createElement("button");
    stockTitle.textContent = "Vorräte: ";
    const stockValue = document.createElement("span");
    stockValue.id = `stock-${data.getName()}`;
    stockValue.textContent = `${data.getStock()}`;
    stockValue.style.visibility = "hidden";
    const veggieRow = document.createElement("div");
    veggieRow.className = "value-container";
    const veggieTitle = document.createElement("button");
    veggieTitle.textContent = "Veggie: ";
    const veggieValue = document.createElement("span");
    veggieValue.id = `veggie-${data.getName()}`;
    veggieValue.textContent = `${data.getVeggie()}`;
    veggieValue.style.visibility = "hidden";
    const diabetesRow = document.createElement("div");
    diabetesRow.className = "value-container";
    const diabetesTitle = document.createElement("button");
    diabetesTitle.textContent = "Diabetes: ";
    const diabetesValue = document.createElement("span");
    diabetesValue.id = `diabetes-${data.getName()}`;
    diabetesValue.textContent = `${data.getDiabetes()}`;
    diabetesValue.style.visibility = "hidden";
    const glutenRow = document.createElement("div");
    glutenRow.className = "value-container";
    const glutenTitle = document.createElement("button");
    glutenTitle.textContent = "Glutenunverträglichkeit: ";
    const glutenValue = document.createElement("span");
    glutenValue.id = `gluten-${data.getName()}`;
    glutenValue.textContent = `${data.getGluten()}`;
    glutenValue.style.visibility = "hidden";
    const lactoseRow = document.createElement("div");
    lactoseRow.className = "value-container";
    const lactoseTitle = document.createElement("button");
    lactoseTitle.textContent = "Laktoseintoleranz: ";
    const lactoseValue = document.createElement("span");
    lactoseValue.id = `lactose-${data.getName()}`;
    lactoseValue.textContent = `${data.getLactose()}`;
    lactoseValue.style.visibility = "hidden";
    hungerRow.append(hungerTitle, hungerValue);
    stockRow.append(stockTitle, stockValue);
    veggieRow.append(veggieTitle, veggieValue);
    diabetesRow.append(diabetesTitle, diabetesValue);
    glutenRow.append(glutenTitle, glutenValue);
    lactoseRow.append(lactoseTitle, lactoseValue);
    const elementArray = [hungerRow, stockRow, veggieRow, diabetesRow, glutenRow, lactoseRow];
    const hungerStockButtons = [hungerTitle, stockTitle];
    const foodIntolerances = [veggieTitle, diabetesTitle, glutenTitle, lactoseTitle];
    [...hungerStockButtons, ...foodIntolerances].forEach(element => {
        element.addEventListener("click", (e) => { helpers.showValue(e), helpers.hungerForward(); });
    });
    habitantContainer.append(nameParagraph, ...elementArray);
    return habitantContainer;
}
export function showHabitants(currentHabitants) {
    currentHabitants.forEach(element => {
        const habitantElement = createHabitantElement(element);
        helpers.domHabitants.appendChild(habitantElement);
    });
}
;
export function sabotageHabitant(currentHabitants) {
    const index = helpers.random(currentHabitants.length) - 1;
    const chosenHabitant = currentHabitants[index];
    if (chosenHabitant.getRats() === false) {
        chosenHabitant.setHunger(chosenHabitant.getHunger() + 50);
        chosenHabitant.setStock(chosenHabitant.getStock() - 50);
        chosenHabitant.setRats(true);
    }
    ;
}
;
//# sourceMappingURL=startGame.js.map