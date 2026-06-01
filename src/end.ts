import * as background from "./background.js";
import * as helpers from "./helpers.js";
import * as game from "./game.js";

export function resetGame() {
    background.shelterState.current!.setHunger(0);
    background.shelterState.current!.setStock(0);
    background.shelterState.current!.setInfected(0);

    helpers.showStatus(background.shelterState.current!);

    background.gameState.current = null;
    background.habitantState.current = null;
    background.shelterState.current = null;
    background.allHabitantsDom.current = null;

    helpers.domHabitants.textContent = "";
    helpers.domHungerBar.setAttribute("--fill-level", "0%");
    helpers.domStockBar.setAttribute("--fill-level", "0%");

    game.startButton.removeAttribute("disabled");
}