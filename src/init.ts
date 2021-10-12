import { createCardHTML } from "./card";

export function init() {
    document.body.append(
        ...Array.from(
            new DOMParser().parseFromString(
                /*html*/ `
<div class="game">
    <main class="duel-container">
        <section class="player-1">

        </section>

        <section class="field">
            <div class="deck">
                ${createCardHTML("red", 1)}
            </div>

            <div class="draw">

            </div>
        </section>

        <section class="player-2">

        </section>
    </main>
</div>
    `,
                "text/html"
            ).body.childNodes
        )
    );

    document.head.append(
        Object.assign(document.createElement("style"), {
            textContent: /*css*/ `
body {
    display: grid;
    place-items: center;
}

.game {
    max-width: 1080px;
    min-width: 1080px;
    background: blue;
}

.duel-container {
    display: flex;
}

/* CSS to render cards */

div.card {
    background: attr(data-color color);
    width: 350px;
    height: 500px;
}
            `,
        })
    );

    return true;
}
