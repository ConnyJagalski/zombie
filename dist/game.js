import * as backgroundFunctions from "./backgroundFunctions.js";
const startButton = document.getElementById("start-game");
const roundButton = document.getElementById("new-round");
startButton.addEventListener("click", backgroundFunctions.startGame);
roundButton.addEventListener("click", backgroundFunctions.newRound);
//# sourceMappingURL=game.js.map