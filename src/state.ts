import { createCardElement } from "./card";
import { Card } from "./types";

let card = {
    color: "rainbow",
    value: "wild4",
} as Card;

let reversed = false;

let switching = false;

export const state = {
    set card(v: Card) {
        card = v;

        document.querySelector(".deck")!.replaceChild(createCardElement(card.color, card.value, true), document.querySelector(".deck .card")!);
    },
    get card() {
        return card;
    },
    set reversed(v: boolean) {
        reversed = v;
    },
    get reversed() {
        return reversed;
    },
    set switching(v: boolean) {
        switching = v;

        document.querySelector(".switch-cover")!.classList[switching ? "add" : "remove"]("enabled");
    },
    get switching() {
        return switching;
    },
};
