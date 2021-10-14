import { CARD_COLORS, CARD_VALUES, COLORS, NAMES } from "./constants";

export function init() {
    document.body.append(
        ...Array.from(
            new DOMParser().parseFromString(
                /*html*/ `
<div class="game">
    <main class="duel-container">
        <section class="player player-0">
            <div class="card-container">
                <div class="card-container-pad"></div>
            </div>
        </section>

        <h2 class="player-count player-count-0 left-align">0</h2>

        <section class="field">
            <div class="deck">
                <div class="card thicc placeholder">
                </div>
            </div>

            <div class="draw">
                <button class="draw-button">Draw</button>
            </div>
        </section>

        <h2 class="player-count player-count-1 right-align">0</h2>

        <section class="player player-1">
            <div class="card-container">
                <div class="card-container-pad"></div>
            </div>
        </section>
    </main>

    <div class="switch-cover">
        <button class="switch-button">Click to continue the game</button>
    </div>
</div>
    `,
                "text/html"
            ).body.childNodes
        )
    );

    document.head.append(
        Object.assign(document.createElement("style"), {
            textContent: /*css*/ `
*,
*::before,
*::after {
    margin: 0;
    box-sizing: border-box;
}

html {
    height: 100%;

    overflow: hidden;
    overscroll-behaviour: none;
}

body {
    height: 100%;
    
    display: grid;
    place-items: center;
 
    font-family: sans-serif;
}

.game {
    max-width: 800px;
    min-width: 800px;
    
    max-height: 300px;
    min-height: 300px;

    background: #fbfbfb;

    border: 1px solid #f4f4f4;

    border-radius: 2px;

    position: relative;

    overflow: hidden;
}

.duel-container {
    display: flex;
}

.duel-container > * {
    max-height: 300px;
    min-height: 300px;
}

.field {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items; center;
    justify-content: space-evenly;
}

.deck {
    display: grid;
    place-items: center;
}

.draw {
    display: grid;
    place-items: center;
}

.draw-button {
    width: 140px;
    padding: 0.25rem 0.5rem;
    
    cursor: pointer;
}

.switch-button {
    width: 200px;
    padding: 0.25rem 0.5rem;
    
    cursor: pointer;
}

.player {
    min-width: 80px;
    
    flex-shrink: 0;
    
    padding: 0.25rem;

    display: flex;

    overflow: auto;

    position: relative;
}

.player-count {
    min-width: 70px;

    flex-shrink: : 0;;

    padding: 0.25rem;

    font-size: 1rem;
}

.left-align {
    text-align: left;
}

.right-align {
    text-align: right;
}

.card-container {
    width: 100%;

    display: flex;

    align-items: center;
    
    flex-direction: column;

    gap: 0.25rem;

    min-height: min-content;
}

.card-container-pad {
    height: 0.25rem;

    width: 70px;

    flex-shrink: 0;
}

.switch-cover {
    background: #fbfbfb;

    display: grid;
    place-items: center;

    opacity: 0;

    position: absolute;

    top: 0;
    left: 0;

    width: 798px;
    height: 298px;

    pointer-events: none;
}

.switch-cover.enabled {
    opacity: 1;

    pointer-events: auto;
}

/* CSS to render cards */

div.card {
    width: 70px;
    height: 100px;
    
    color: white;

    padding: 0.5rem;

    position: relative;

    border-radius: 2px;

    display: grid;
    place-items: center;

    flex-shrink: 0;

    text-shadow: 1px 1px #000000;

    user-select: none;
}

div.card p.card-value {
    font-size: 1.25rem;
}

div.card.thicc {
    width: 140px;
    height: 200px;
    
    border-radius: 4px;

    text-shadow: 2px 2px #000000;
}

div.card.thicc p.card-value {
    font-size: 2.25rem;
}

div.card.rainbow {
    background: #1a1a1a;
}
${CARD_COLORS.map(
    (color) => /*css*/ `
div.card.${color} {
    background: ${COLORS[color]};
}`
).join("\n")}
${CARD_VALUES.map(
    (value) => /*css*/ `
div.card.value-${value}::before {
    content: "${typeof value === "number" ? value : NAMES[value]}";
    font-size: ${typeof value === "number" ? 0.8 : 0.55}rem;
    display: block;

    transform: rotate(0deg);

    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
}

div.card.thicc.value-${value}::before {
    font-size: ${typeof value === "number" ? 1.25 : 1}rem;
}`
).join("\n")}
${CARD_VALUES.map(
    (value) => /*css*/ `
div.card.value-${value}::after {
    content: "${typeof value === "number" ? value : NAMES[value]}";
    font-size: ${typeof value === "number" ? 0.8 : 0.55}rem;
    display: block;
    
    transform: rotate(180deg);

    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
}

div.card.thicc.value-${value}::after {
    font-size: ${typeof value === "number" ? 1.25 : 1}rem;
}`
).join("\n")}

div.card.placeholder {
    background: #eeeeee;
}
            `,
        })
    );

    return true;
}
