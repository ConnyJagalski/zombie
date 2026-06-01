import * as classes from "./classes.js";
import * as helpers from "./helpers.js";
import * as background from "./background.js";
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
            helpers.randomBoolean(names.length),
            undefined
        )
    }
    )
};

export function generateFood(meals: object): classes.Food[] {

    return Object.values(meals).map((value) => {
        return new classes.Food(
            value.name,
            value.veggie,
            value.gluten,
            value.sweet,
            value.milk
        )
    });
};

export function createDataRow(titleText: string, name: string, valueText: any) {
    const row = document.createElement("div");
    row.className = "value-container";
    const title = document.createElement("button");
    title.textContent = titleText;
    const value = document.createElement("span");
    value.id = `${titleText.toLowerCase()}-${name}`;
    value.textContent = valueText;
    value.style.visibility = "visible";

    title.addEventListener("click", () => {
        title.setAttribute("disabled", "");
    });

    row.append(title, value);

    return {
        row: row,
        title: title,
        value: value
    };
};

export function createHabitantElement(input: classes.Habitant) {
    const name = input.getName();
    const hunger = input.getHunger();
    const stock = input.getStock();
    const veggie = input.getVeggie();
    const gluten = input.getGluten();
    const diabetes = input.getDiabetes();
    const lactose = input.getLactose();
    const poisonCount = input.getPoisonCount();

    const habitantState = background.habitantState.current;
    const shelterState = background.shelterState.current;

    if(!habitantState) {
        throw new Error("habitantState konnte nicht geladen werden oder ist leer.");
    };

    if(!shelterState) {
        throw new Error("shelterState konnte nicht geladen werden oder ist leer.");
    };

    const habitantContainer = document.createElement("section");
    habitantContainer.id = `habitant-${name}`;
    habitantContainer.className = "habitant-container";
    habitantContainer.setAttribute("tabindex", "0");
    habitantContainer.addEventListener("click", (e) => background.chooseHabitant(e));

    const nameParagraph = document.createElement("h3");
    nameParagraph.textContent = name;

    const hungerRow = createDataRow("Hunger", name, hunger);
    const stockRow = createDataRow("Vorräte", name, stock);
    const veggieRow = createDataRow("Veggie", name, veggie);
    const diabetesRow = createDataRow("Diabetes", name, diabetes);
    const glutenRow = createDataRow("Glutenunverträglichkeit", name, gluten);
    const lactoseRow = createDataRow("Laktoseintoleranz", name, lactose);
    const poisonRow = createDataRow("Rattengift", name, poisonCount);

    const mealRow = document.createElement("div");
    mealRow.className = "value-container";
    const mealSelect = document.createElement("select");
    data.meals.forEach(meal => {
        const option = document.createElement("option");
        option.value = meal.name;
        option.textContent = meal.name;
        mealSelect.appendChild(option);
    });
    const giveMeal = document.createElement("button");
    giveMeal.className = "meal-button";
    giveMeal.textContent = "Mahlzeit geben";
    giveMeal.addEventListener("click", () => {round.checkMeal(mealSelect.value, input);});
    
    mealRow.append(mealSelect, giveMeal);

    poisonRow.title.addEventListener("click", () => {
        round.givePoison(input);
        input.increasePoisonCount();
        poisonRow.value.textContent = `${input.getPoisonCount()}`;
        helpers.calcStatus(habitantState, shelterState);
        if(shelterState.getInfected() === 0) {
            background.end("Gewonnen!");
        }
    });

    const elementArray = [hungerRow.row, stockRow.row, veggieRow.row, diabetesRow.row, glutenRow.row, lactoseRow.row, mealRow, poisonRow.row];
    const hungerStockButtons = [hungerRow.title, stockRow.title];
    const foodIntolerances = [veggieRow.title, diabetesRow.title, glutenRow.title, lactoseRow.title];

    [...hungerStockButtons, ...foodIntolerances].forEach(element => {
        element.addEventListener("click", (e) => { round.showValue(e), round.hungerForward() });
    });

    hungerRow.title.addEventListener("click", () => {
        hungerRow.value.textContent = `${hunger}`
    });

    stockRow.title.addEventListener("click", () => {
        stockRow.value.textContent = `${stock}`
    });

    habitantContainer.append(nameParagraph, ...elementArray);

    return habitantContainer;
}

export function showHabitants(habitant: classes.Habitant[]) {
    habitant.forEach(element => {
        const habitantElement = createHabitantElement(element);
        helpers.domHabitants.appendChild(habitantElement);
    });
};

export function sabotageHabitant(habitant: classes.Habitant[]) {
    const index = helpers.random(habitant.length);
    const chosenHabitant = habitant[index];
    const stock = chosenHabitant!.getStock();

    if (chosenHabitant!.getRats() === false) {
        chosenHabitant!.setRats(true);
        if(stock > 49) {
            chosenHabitant!.setStock(stock - 50);
        } else {
            chosenHabitant!.setStock(0);
        };
    };
};