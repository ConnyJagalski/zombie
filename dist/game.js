import * as background from "./background.js";
export const startButton = document.getElementById("start-game");
const roundButton = document.getElementById("new-round");
const endButton = document.getElementById("end-game");
startButton.addEventListener("click", background.startGame);
roundButton.addEventListener("click", background.newRound);
endButton.addEventListener("click", () => background.end());
//# sourceMappingURL=game.js.map