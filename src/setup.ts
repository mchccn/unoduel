import { deck, draw, played } from "./deck";
import { players, updatePlayers } from "./players";
import { state } from "./state";

export function setup() {
    for (const _ of [0, 0, 0, 0, 0, 0, 0]) {
        for (const player of players) {
            player.push(draw());
        }
    }

    let start = draw();

    while (typeof start.value !== "number") {
        deck.push(start);

        start = draw();
    }

    state.card = start;

    played.push(start);

    updatePlayers();

    document.querySelector(".draw-button")!.addEventListener("click", () => {
        const drawn = draw();

        players[players.turn].unshift(drawn);

        updatePlayers();
    });
}
