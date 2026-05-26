import * as classes from "./classes";
import * as data from "./data";
import * as classes from "./classes.js";
import * as data from "./data.js";
export function random() {
    return Math.floor(Math.random() * 10) + 1;
}
;
export function startGame() {
    const newGame = new classes.Shelter();
    const habitants = data.habitants.map(name => new classes.Habitant(name, undefined, // Lässt den Konstruktor den Standardwert für hunger verwenden
    undefined, // Lässt den Konstruktor den Standardwert für stock verwenden
    undefined, // Lässt den Konstruktor den Standardwert für rats verwenden
    Math.random() < 0.5, // veggie
    Math.random() < 0.5, // diabetes
    Math.random() < 0.5, // gluten
    Math.random() < 0.5 // lactose
    ));
    console.log(habitants); // Zur Überprüfung der erstellten Bewohner
    // --- HIER IST DIE LÖSUNG ---
    // 1. Hole die HTML-Elemente der Statusbalken
    const hungerBar = document.getElementById('hunger-bar');
    const stockBar = document.getElementById('stock-bar');
    // 2. Aktualisiere die CSS-Variable '--fill-level' mit den Werten aus dem Shelter-Objekt
    hungerBar?.style.setProperty('--fill-level', newGame.getHunger() + '%');
    stockBar?.style.setProperty('--fill-level', newGame.getStock() + '%');
}
//# sourceMappingURL=globalFunctions.js.map