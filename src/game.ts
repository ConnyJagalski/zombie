import * as background from "./background.js"

export const startButton = document.getElementById("start-game") as HTMLElement;
const roundButton = document.getElementById("new-round") as HTMLElement;
const endButton = document.getElementById("end-game") as HTMLElement;

startButton.addEventListener("click", background.startGame);
roundButton.addEventListener("click", background.newRound);
endButton.addEventListener("click", () => background.end());