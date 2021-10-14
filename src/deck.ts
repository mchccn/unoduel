import { CARD_COLORS, CARD_TYPES } from "./constants";
import { Card } from "./types";

export const deck = shuffle(createDeck());

export const played = [] as Card[];

export function createDeck() {
    const deck = [] as Card[];

    for (const value of CARD_TYPES) {
        for (const color of CARD_COLORS) {
            deck.push({ color, value });
            deck.push({ color, value });
            deck.push({ color, value });
            deck.push({ color, value });
        }
    }

    for (const _ of [0, 0, 0, 0]) {
        deck.push({ color: "rainbow", value: "wild" });
        deck.push({ color: "rainbow", value: "wild4" });
    }

    return deck;
}

export function shuffle(deck: Card[]) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }

    return deck;
}

export function draw() {
    let card = deck.shift();

    if (!card) {
        deck.length = 0;

        deck.push(...shuffle(played));

        played.length = 0;
    }

    card = deck.shift()!;

    return card;
}
