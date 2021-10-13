import { createCardElement } from "./card";
import { Card } from "./types";

let card = {
    color: "rainbow",
    value: "wild4",
} as Card;

export const state = {
    set card(v: Card) {
        card = v;

        document.querySelector(".deck")!.replaceChild(createCardElement(card.color, card.value, true), document.querySelector(".deck .card")!);
    },
    get card() {
        return card;
    },
};
