import * as classes from "./classes.js";
const domHungerBar = document.getElementById("hunger-bar");
const domStockBar = document.getElementById("stock-bar");
const domHabitants = document.getElementById("habitants");
export function random(length) {
    return Math.floor(Math.random() * length);
}
;
export function randomBoolean(length) {
    return random(length) < 6;
}
;
export function generateHabitants(names) {
    return names.map(name => {
        return new classes.Habitant(name, undefined, undefined, undefined, randomBoolean(names.length), randomBoolean(names.length), randomBoolean(names.length), randomBoolean(names.length));
    });
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
export function createHabitantElement(data) {
    const habitantContainer = document.createElement("section");
    habitantContainer.id = `habitant-${data.getName()}`;
    habitantContainer.className = "habitant-container";
    const nameParagraph = document.createElement("h3");
    nameParagraph.textContent = data.getName();
    const hungerRow = document.createElement("div");
    hungerRow.className = "value-container";
    const hungerTitle = document.createElement("button");
    hungerTitle.textContent = "Hunger: ";
    const hungerValue = document.createElement("span");
    hungerValue.id = `hunger-${data.getName()}`;
    hungerValue.textContent = `${data.getHunger()}`;
    hungerValue.style.visibility = "visible";
    const stockRow = document.createElement("div");
    stockRow.className = "value-container";
    const stockTitle = document.createElement("button");
    stockTitle.textContent = "Vorräte: ";
    const stockValue = document.createElement("span");
    stockValue.id = `stock-${data.getName()}`;
    stockValue.textContent = `${data.getStock()}`;
    stockValue.style.visibility = "visible";
    const veggieRow = document.createElement("div");
    veggieRow.className = "value-container";
    const veggieTitle = document.createElement("button");
    veggieTitle.textContent = "Veggie: ";
    const veggieValue = document.createElement("span");
    veggieValue.id = `veggie-${data.getName()}`;
    veggieValue.textContent = `${data.getVeggie()}`;
    veggieValue.style.visibility = "visible";
    const diabetesRow = document.createElement("div");
    diabetesRow.className = "value-container";
    const diabetesTitle = document.createElement("button");
    diabetesTitle.textContent = "Diabetes: ";
    const diabetesValue = document.createElement("span");
    diabetesValue.id = `diabetes-${data.getName()}`;
    diabetesValue.textContent = `${data.getDiabetes()}`;
    diabetesValue.style.visibility = "visible";
    const glutenRow = document.createElement("div");
    glutenRow.className = "value-container";
    const glutenTitle = document.createElement("button");
    glutenTitle.textContent = "Glutenunverträglichkeit: ";
    const glutenValue = document.createElement("span");
    glutenValue.id = `gluten-${data.getName()}`;
    glutenValue.textContent = `${data.getGluten()}`;
    glutenValue.style.visibility = "visible";
    const lactoseRow = document.createElement("div");
    lactoseRow.className = "value-container";
    const lactoseTitle = document.createElement("button");
    lactoseTitle.textContent = "Laktoseintoleranz: ";
    const lactoseValue = document.createElement("span");
    lactoseValue.id = `lactose-${data.getName()}`;
    lactoseValue.textContent = `${data.getLactose()}`;
    lactoseValue.style.visibility = "visible";
    hungerRow.append(hungerTitle, hungerValue);
    stockRow.append(stockTitle, stockValue);
    veggieRow.append(veggieTitle, veggieValue);
    diabetesRow.append(diabetesTitle, diabetesValue);
    glutenRow.append(glutenTitle, glutenValue);
    lactoseRow.append(lactoseTitle, lactoseValue);
    const elementArray = [hungerRow, stockRow, veggieRow, diabetesRow, glutenRow, lactoseRow];
    const buttonArray = [hungerTitle, stockTitle, veggieTitle, diabetesTitle, glutenTitle, lactoseTitle];
    buttonArray.forEach(element => {
        element.addEventListener("click", showValue);
    });
    habitantContainer.append(nameParagraph, ...elementArray);
    return habitantContainer;
}
export function showHabitants(currentHabitants) {
    currentHabitants.forEach(element => {
        const habitantElement = createHabitantElement(element);
        domHabitants.appendChild(habitantElement);
    });
}
;
export function sabotageHabitant(currentHabitants) {
    const index = random(currentHabitants.length) - 1;
    const chosenHabitant = currentHabitants[index];
    if (chosenHabitant.getRats() === false) {
        chosenHabitant.setHunger(chosenHabitant.getHunger() + 50);
        chosenHabitant.setStock(chosenHabitant.getStock() - 50);
        chosenHabitant.setRats(true);
    }
    ;
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
//# sourceMappingURL=helpers.js.map