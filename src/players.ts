import { createCardElement } from "./card";
import { CARD_ACTIONS, PLAYER_COUNT } from "./constants";
import { played } from "./deck";
import { state } from "./state";
import { Card } from "./types";

export const players = Object.assign([[], []] as Card[][], { turn: 0 });

export function play(card: Card) {
    const last = played[played.length - 1];

    if (last.color !== "rainbow" && last.color !== card.color && card.color !== "rainbow" && last.value !== card.value) return false;

    players.turn = (((players.turn + (state.reversed ? -1 : 1)) % PLAYER_COUNT) + PLAYER_COUNT) % PLAYER_COUNT;

    played.push(card);

    state.card = card;

    return true;
}

export function updatePlayers() {
    players.forEach((deck, n) => {
        const el = document.querySelector(`.player.player-${n} .card-container`)!;
        const counter = document.querySelector(`.player-count.player-count-${n}`)!;

        el.innerHTML = "";

        if (n === players.turn)
            el.append(
                ...deck.map((card, i) => {
                    const el = createCardElement(card.color, card.value);

                    el.addEventListener("click", () => {
                        const turn = players.turn;

                        if (play(card)) {
                            deck.splice(i, 1);

                            if (typeof card.value === "string") CARD_ACTIONS[card.value]();

                            updatePlayers();

                            if (!deck.length) {
                                //@ts-ignore
                                return (state.card = {
                                    color: "placeholder",
                                    value: `Player ${n + 1} wins!`,
                                } as Card);
                            }

                            if (turn !== players.turn) state.switching = true;
                        }

                        return;
                    });

                    return el;
                })
            );
        else
            el.append(
                ...deck.map((card) => {
                    const el = createCardElement(card.color, card.value) as HTMLElement;

                    el.className = "card placeholder";

                    el.textContent = "";

                    return el;
                })
            );

        el.append(
            Object.assign(document.createElement("div"), {
                className: "card-container-pad",
            })
        );

        counter.textContent = deck.length === 1 ? "UNO!!!" : deck.length.toString();
    });
}
