import { CardColor, CardValue } from "./types";

export function createCardElement(color: CardColor, value: CardValue) {
    return new DOMParser().parseFromString(createCardHTML(color, value), "text/html").body.childNodes[0];
}

export function createCardHTML(color: CardColor, value: CardValue) {
    return /*html*/ `
        <div class="card" data-color="${color}" data-value="${value}" />
    `;
}
