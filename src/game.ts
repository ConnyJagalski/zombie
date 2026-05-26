import * as backgroundFunctions from "./backgroundFunctions.js"

const startButton = document.getElementById("start-game") as HTMLElement;

startButton.addEventListener("click", () => {backgroundFunctions.startGame()});