import { SYMBOLS } from "./constants";
import { CardColor, CardValue } from "./types";

export function createCardElement(color: CardColor, value: CardValue, thicc?: boolean) {
    return new DOMParser().parseFromString(createCardHTML(color, value, thicc), "text/html").body.childNodes[0];
}

export function createCardHTML(color: CardColor, value: CardValue, thicc?: boolean) {
    return /*html*/ `
        <div class="card ${color} value-${value}${thicc ? " thicc" : ""}">
            <p class="card-value">${typeof value === "number" ? value : SYMBOLS[value]}</p>
        </div>
    `;
}
