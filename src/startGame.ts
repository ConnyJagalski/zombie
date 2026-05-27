import * as classes from "./classes.js";
import * as helpers from "./helpers.js";
import * as backgroundFunctions from "./backgroundFunctions.js";
import * as data from "./data.js";
import * as round from "./round.js";

export function generateHabitants(names: string[]): classes.Habitant[] {
    return names.map(name => {
        return new classes.Habitant(
            name,
            undefined,
            undefined,
            undefined,
            helpers.randomBoolean(names.length),
            helpers.randomBoolean(names.length),
            helpers.randomBoolean(names.length),
            helpers.randomBoolean(names.length)
        )
    }
    )
};

export function createHabitantElement(input: classes.Habitant) {
    const habitantContainer = document.createElement("section");
    habitantContainer.id = `habitant-${input.getName()}`;
    habitantContainer.className = "habitant-container";
    habitantContainer.setAttribute("tabindex", "0");
    habitantContainer.addEventListener("click", (e) => backgroundFunctions.chooseHabitant(e));

    const nameParagraph = document.createElement("h3");
    nameParagraph.textContent = input.getName();

    const hungerRow = document.createElement("div");
    hungerRow.className = "value-container";
    const hungerTitle = document.createElement("button");
    hungerTitle.textContent = "Hunger: ";
    const hungerValue = document.createElement("span");
    hungerValue.id = `hunger-${input.getName()}`;
    hungerValue.textContent = "";

    const stockRow = document.createElement("div");
    stockRow.className = "value-container";
    const stockTitle = document.createElement("button");
    stockTitle.textContent = "Vorräte: ";
    const stockValue = document.createElement("span");
    stockValue.id = `stock-${input.getName()}`;
    stockValue.textContent = "";

    const veggieRow = document.createElement("div");
    veggieRow.className = "value-container";
    const veggieTitle = document.createElement("button");
    veggieTitle.textContent = "Veggie: ";
    const veggieValue = document.createElement("span");
    veggieValue.id = `veggie-${input.getName()}`;
    veggieValue.textContent = `${input.getVeggie()}`
    veggieValue.style.visibility = "hidden";

    const diabetesRow = document.createElement("div");
    diabetesRow.className = "value-container";
    const diabetesTitle = document.createElement("button");
    diabetesTitle.textContent = "Diabetes: ";
    const diabetesValue = document.createElement("span");
    diabetesValue.id = `diabetes-${input.getName()}`;
    diabetesValue.textContent = `${input.getDiabetes()}`
    diabetesValue.style.visibility = "hidden";

    const glutenRow = document.createElement("div");
    glutenRow.className = "value-container";
    const glutenTitle = document.createElement("button");
    glutenTitle.textContent = "Glutenunverträglichkeit: ";
    const glutenValue = document.createElement("span");
    glutenValue.id = `gluten-${input.getName()}`;
    glutenValue.textContent = `${input.getGluten()}`
    glutenValue.style.visibility = "hidden";

    const lactoseRow = document.createElement("div");
    lactoseRow.className = "value-container";
    const lactoseTitle = document.createElement("button");
    lactoseTitle.textContent = "Laktoseintoleranz: ";
    const lactoseValue = document.createElement("span");
    lactoseValue.id = `lactose-${input.getName()}`;
    lactoseValue.textContent = `${input.getLactose()}`
    lactoseValue.style.visibility = "hidden";

    const mealRow = document.createElement("div");
    mealRow.className = "value-container";
    const mealSelect = document.createElement("select");
    data.meals.forEach(meal => {
        const option = document.createElement("option");
        option.value = meal.name.toLowerCase().replace(" ", "-");
        option.textContent = meal.name;
        mealSelect.appendChild(option);
    });
    const giveMeal = document.createElement("button");
    giveMeal.textContent = "Mahlzeit geben";
    giveMeal.addEventListener("click", round.checkMeal);
    
    const poisonRow = document.createElement("div");
    poisonRow.className = "value-container";
    const poisonButton = document.createElement("button");
    poisonButton.textContent = "Rattengift auslegen";
    poisonButton.addEventListener("click", round.givePoison);

    hungerRow.append(hungerTitle, hungerValue);
    stockRow.append(stockTitle, stockValue);
    veggieRow.append(veggieTitle, veggieValue);
    diabetesRow.append(diabetesTitle, diabetesValue);
    glutenRow.append(glutenTitle, glutenValue);
    lactoseRow.append(lactoseTitle, lactoseValue);
    mealRow.append(mealSelect, giveMeal);
    poisonRow.append(poisonButton);

    const elementArray = [hungerRow, stockRow, veggieRow, diabetesRow, glutenRow, lactoseRow, mealRow, poisonRow];
    const hungerStockButtons = [hungerTitle, stockTitle];
    const foodIntolerances = [veggieTitle, diabetesTitle, glutenTitle, lactoseTitle];

    [...hungerStockButtons, ...foodIntolerances].forEach(element => {
        element.addEventListener("click", (e) => { round.showValue(e), round.hungerForward() });
    });

    hungerTitle.addEventListener("click", () => {
        hungerValue.textContent = `${input.getHunger()}`
    });

    stockTitle.addEventListener("click", () => {
        stockValue.textContent = `${input.getStock()}`
    });

    habitantContainer.append(nameParagraph, ...elementArray);

    return habitantContainer;
}

export function showHabitants(currentHabitants: classes.Habitant[]) {
    currentHabitants.forEach(element => {
        const habitantElement = createHabitantElement(element);
        helpers.domHabitants.appendChild(habitantElement);
    });
};

export function sabotageHabitant(currentHabitants: classes.Habitant[]) {
    const index = helpers.random(currentHabitants.length) - 1;
    const chosenHabitant = currentHabitants[index];

    if (chosenHabitant!.getRats() === false) {
        chosenHabitant!.setHunger(chosenHabitant!.getHunger() + 50);
        chosenHabitant!.setStock(chosenHabitant!.getStock() - 50);
        chosenHabitant!.setRats(true);
    };
};