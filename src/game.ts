import * as backgroundFunctions from "./backgroundFunctions.js"

const startButton = document.getElementById("start-game") as HTMLElement;
const roundButton = document.getElementById("new-round") as HTMLElement;

startButton.addEventListener("click", backgroundFunctions.startGame);
roundButton.addEventListener("click", backgroundFunctions.newRound);