import * as classes from "./classes";
import * as data from "./data";

export function random() {
    return Math.floor(Math.random() * 10) + 1;
};

/* export function startGame() {
    const newGame = new classes.Shelter();

    const habitants: classes.Habitant[] = data.habitants.map(

        daten => new classes.Habitant(daten)
    )
} */