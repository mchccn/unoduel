import { deck, draw } from "./deck";
import { players } from "./players";
import { state } from "./state";
import { Card } from "./types";

export function setup() {
    for (const _ of [0, 0, 0, 0, 0, 0, 0]) {
        for (const player of players) {
            player.push(draw(deck) as Card);
        }
    }

    let start = draw(deck) as Card;

    while (typeof start.value !== "number") {
        deck.push(start);

        start = draw(deck) as Card;
    }

    state.card = start;
}
