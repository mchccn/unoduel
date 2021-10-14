/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/card.ts":
/*!*********************!*\
  !*** ./src/card.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createCardHTML = exports.createCardElement = void 0;
var constants_1 = __webpack_require__(/*! ./constants */ "./src/constants.ts");
function createCardElement(color, value, thicc) {
    return new DOMParser().parseFromString(createCardHTML(color, value, thicc), "text/html").body.childNodes[0];
}
exports.createCardElement = createCardElement;
function createCardHTML(color, value, thicc) {
    return /*html*/ "\n        <div class=\"card " + color + " value-" + value + (thicc ? " thicc" : "") + "\">\n            <p class=\"card-value\">" + (typeof value === "number" ? value : constants_1.SYMBOLS[value]) + "</p>\n        </div>\n    ";
}
exports.createCardHTML = createCardHTML;


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.COLORS = exports.NAMES = exports.SYMBOLS = exports.PLAYER_COUNT = exports.CARD_ACTIONS = exports.CARD_COLORS = exports.CARD_VALUES = exports.CARD_TYPES = void 0;
var deck_1 = __webpack_require__(/*! ./deck */ "./src/deck.ts");
var players_1 = __webpack_require__(/*! ./players */ "./src/players.ts");
var state_1 = __webpack_require__(/*! ./state */ "./src/state.ts");
exports.CARD_TYPES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "reverse", "skip", "draw2"];
exports.CARD_VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "reverse", "skip", "draw2", "wild", "wild4"];
exports.CARD_COLORS = ["red", "yellow", "green", "blue"];
exports.CARD_ACTIONS = {
    reverse: function () {
        state_1.state.reversed = !state_1.state.reversed;
        players_1.players.turn = (((players_1.players.turn + (state_1.state.reversed ? -1 : 1)) % exports.PLAYER_COUNT) + exports.PLAYER_COUNT) % exports.PLAYER_COUNT;
    },
    skip: function () { return (players_1.players.turn = (players_1.players.turn + 1) % exports.PLAYER_COUNT); },
    draw2: function () { return players_1.players[players_1.players.turn].unshift((0, deck_1.draw)(), (0, deck_1.draw)()); },
    wild: function () { return void 0; },
    wild4: function () { return players_1.players[players_1.players.turn].unshift((0, deck_1.draw)(), (0, deck_1.draw)(), (0, deck_1.draw)(), (0, deck_1.draw)()); },
};
exports.PLAYER_COUNT = 2;
exports.SYMBOLS = {
    reverse: "🔄",
    skip: "⃠",
    draw2: "➕2️⃣",
    wild: "🌈",
    wild4: "🌈4️⃣",
};
exports.NAMES = {
    reverse: "reverse",
    skip: "skip",
    draw2: "draw 2",
    wild: "wild",
    wild4: "wild draw 4",
};
exports.COLORS = {
    red: "#D31019",
    yellow: "#EEC314",
    green: "#0A852E",
    blue: "#158BCF",
};


/***/ }),

/***/ "./src/deck.ts":
/*!*********************!*\
  !*** ./src/deck.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.draw = exports.shuffle = exports.createDeck = exports.played = exports.deck = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var constants_1 = __webpack_require__(/*! ./constants */ "./src/constants.ts");
exports.deck = shuffle(createDeck());
exports.played = [];
function createDeck() {
    var e_1, _a, e_2, _b, e_3, _c;
    var deck = [];
    try {
        for (var CARD_TYPES_1 = (0, tslib_1.__values)(constants_1.CARD_TYPES), CARD_TYPES_1_1 = CARD_TYPES_1.next(); !CARD_TYPES_1_1.done; CARD_TYPES_1_1 = CARD_TYPES_1.next()) {
            var value = CARD_TYPES_1_1.value;
            try {
                for (var CARD_COLORS_1 = (e_2 = void 0, (0, tslib_1.__values)(constants_1.CARD_COLORS)), CARD_COLORS_1_1 = CARD_COLORS_1.next(); !CARD_COLORS_1_1.done; CARD_COLORS_1_1 = CARD_COLORS_1.next()) {
                    var color = CARD_COLORS_1_1.value;
                    deck.push({ color: color, value: value });
                    deck.push({ color: color, value: value });
                    deck.push({ color: color, value: value });
                    deck.push({ color: color, value: value });
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (CARD_COLORS_1_1 && !CARD_COLORS_1_1.done && (_b = CARD_COLORS_1.return)) _b.call(CARD_COLORS_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (CARD_TYPES_1_1 && !CARD_TYPES_1_1.done && (_a = CARD_TYPES_1.return)) _a.call(CARD_TYPES_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        for (var _d = (0, tslib_1.__values)([0, 0, 0, 0]), _e = _d.next(); !_e.done; _e = _d.next()) {
            var _ = _e.value;
            deck.push({ color: "rainbow", value: "wild" });
            deck.push({ color: "rainbow", value: "wild4" });
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_e && !_e.done && (_c = _d.return)) _c.call(_d);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return deck;
}
exports.createDeck = createDeck;
function shuffle(deck) {
    for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    return deck;
}
exports.shuffle = shuffle;
function draw() {
    var card = exports.deck.shift();
    if (!card) {
        exports.deck.length = 0;
        exports.deck.push.apply(exports.deck, (0, tslib_1.__spreadArray)([], (0, tslib_1.__read)(shuffle(exports.played)), false));
        exports.played.length = 0;
    }
    card = exports.deck.shift();
    return card;
}
exports.draw = draw;


/***/ }),

/***/ "./src/init.ts":
/*!*********************!*\
  !*** ./src/init.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var constants_1 = __webpack_require__(/*! ./constants */ "./src/constants.ts");
function init() {
    var _a;
    (_a = document.body).append.apply(_a, (0, tslib_1.__spreadArray)([], (0, tslib_1.__read)(Array.from(new DOMParser().parseFromString(
    /*html*/ "\n<div class=\"game\">\n    <main class=\"duel-container\">\n        <section class=\"player player-0\">\n            <div class=\"card-container\">\n                <div class=\"card-container-pad\"></div>\n            </div>\n        </section>\n\n        <h2 class=\"player-count player-count-0 left-align\">0</h2>\n\n        <section class=\"field\">\n            <div class=\"deck\">\n                <div class=\"card thicc placeholder\">\n                </div>\n            </div>\n\n            <div class=\"draw\">\n                <button class=\"draw-button\">Draw</button>\n            </div>\n        </section>\n\n        <h2 class=\"player-count player-count-1 right-align\">0</h2>\n\n        <section class=\"player player-1\">\n            <div class=\"card-container\">\n                <div class=\"card-container-pad\"></div>\n            </div>\n        </section>\n    </main>\n\n    <div class=\"switch-cover\">\n        <button class=\"switch-button\">Click to continue the game</button>\n    </div>\n</div>\n    ", "text/html").body.childNodes)), false));
    document.head.append(Object.assign(document.createElement("style"), {
        textContent: /*css*/ "\n*,\n*::before,\n*::after {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    height: 100%;\n\n    overflow: hidden;\n    overscroll-behaviour: none;\n}\n\nbody {\n    height: 100%;\n    \n    display: grid;\n    place-items: center;\n \n    font-family: sans-serif;\n}\n\n.game {\n    max-width: 800px;\n    min-width: 800px;\n    \n    max-height: 300px;\n    min-height: 300px;\n\n    background: #fbfbfb;\n\n    border: 1px solid #f4f4f4;\n\n    border-radius: 2px;\n\n    position: relative;\n\n    overflow: hidden;\n}\n\n.duel-container {\n    display: flex;\n}\n\n.duel-container > * {\n    max-height: 300px;\n    min-height: 300px;\n}\n\n.field {\n    flex: 1;\n\n    display: flex;\n    flex-direction: column;\n    align-items; center;\n    justify-content: space-evenly;\n}\n\n.deck {\n    display: grid;\n    place-items: center;\n}\n\n.draw {\n    display: grid;\n    place-items: center;\n}\n\n.draw-button {\n    width: 140px;\n    padding: 0.25rem 0.5rem;\n    \n    cursor: pointer;\n}\n\n.switch-button {\n    width: 200px;\n    padding: 0.25rem 0.5rem;\n    \n    cursor: pointer;\n}\n\n.player {\n    min-width: 80px;\n    \n    flex-shrink: 0;\n    \n    padding: 0.25rem;\n\n    display: flex;\n\n    overflow: auto;\n\n    position: relative;\n}\n\n.player-count {\n    min-width: 70px;\n\n    flex-shrink: : 0;;\n\n    padding: 0.25rem;\n\n    font-size: 1rem;\n}\n\n.left-align {\n    text-align: left;\n}\n\n.right-align {\n    text-align: right;\n}\n\n.card-container {\n    width: 100%;\n\n    display: flex;\n\n    align-items: center;\n    \n    flex-direction: column;\n\n    gap: 0.25rem;\n\n    min-height: min-content;\n}\n\n.card-container-pad {\n    height: 0.25rem;\n\n    width: 70px;\n\n    flex-shrink: 0;\n}\n\n.switch-cover {\n    background: #fbfbfb;\n\n    display: grid;\n    place-items: center;\n\n    opacity: 0;\n\n    position: absolute;\n\n    top: 0;\n    left: 0;\n\n    width: 798px;\n    height: 298px;\n\n    pointer-events: none;\n}\n\n.switch-cover.enabled {\n    opacity: 1;\n\n    pointer-events: auto;\n}\n\n/* CSS to render cards */\n\ndiv.card {\n    width: 70px;\n    height: 100px;\n    \n    color: white;\n\n    padding: 0.5rem;\n\n    position: relative;\n\n    border-radius: 2px;\n\n    display: grid;\n    place-items: center;\n\n    flex-shrink: 0;\n\n    text-shadow: 1px 1px #000000;\n\n    user-select: none;\n}\n\ndiv.card p.card-value {\n    font-size: 1.25rem;\n}\n\ndiv.card.thicc {\n    width: 140px;\n    height: 200px;\n    \n    border-radius: 4px;\n\n    text-shadow: 2px 2px #000000;\n}\n\ndiv.card.thicc p.card-value {\n    font-size: 2.25rem;\n}\n\ndiv.card.rainbow {\n    background: #1a1a1a;\n}\n" + constants_1.CARD_COLORS.map(function (color) { /*css*/ return "\ndiv.card." + color + " {\n    background: " + constants_1.COLORS[color] + ";\n}"; }).join("\n") + "\n" + constants_1.CARD_VALUES.map(function (value) { /*css*/ return "\ndiv.card.value-" + value + "::before {\n    content: \"" + (typeof value === "number" ? value : constants_1.NAMES[value]) + "\";\n    font-size: " + (typeof value === "number" ? 0.8 : 0.55) + "rem;\n    display: block;\n\n    transform: rotate(0deg);\n\n    position: absolute;\n    left: 0.5rem;\n    top: 0.5rem;\n}\n\ndiv.card.thicc.value-" + value + "::before {\n    font-size: " + (typeof value === "number" ? 1.25 : 1) + "rem;\n}"; }).join("\n") + "\n" + constants_1.CARD_VALUES.map(function (value) { /*css*/ return "\ndiv.card.value-" + value + "::after {\n    content: \"" + (typeof value === "number" ? value : constants_1.NAMES[value]) + "\";\n    font-size: " + (typeof value === "number" ? 0.8 : 0.55) + "rem;\n    display: block;\n    \n    transform: rotate(180deg);\n\n    position: absolute;\n    right: 0.5rem;\n    bottom: 0.5rem;\n}\n\ndiv.card.thicc.value-" + value + "::after {\n    font-size: " + (typeof value === "number" ? 1.25 : 1) + "rem;\n}"; }).join("\n") + "\n\ndiv.card.placeholder {\n    background: #eeeeee;\n}\n            ",
    }));
    return true;
}
exports.init = init;


/***/ }),

/***/ "./src/players.ts":
/*!************************!*\
  !*** ./src/players.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updatePlayers = exports.play = exports.players = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var card_1 = __webpack_require__(/*! ./card */ "./src/card.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./src/constants.ts");
var deck_1 = __webpack_require__(/*! ./deck */ "./src/deck.ts");
var state_1 = __webpack_require__(/*! ./state */ "./src/state.ts");
exports.players = Object.assign([[], []], { turn: 0 });
function play(card) {
    var last = deck_1.played[deck_1.played.length - 1];
    if (last.color !== "rainbow" && last.color !== card.color && card.color !== "rainbow" && last.value !== card.value)
        return false;
    exports.players.turn = (((exports.players.turn + (state_1.state.reversed ? -1 : 1)) % constants_1.PLAYER_COUNT) + constants_1.PLAYER_COUNT) % constants_1.PLAYER_COUNT;
    deck_1.played.push(card);
    state_1.state.card = card;
    return true;
}
exports.play = play;
function updatePlayers() {
    exports.players.forEach(function (deck, n) {
        var el = document.querySelector(".player.player-" + n + " .card-container");
        var counter = document.querySelector(".player-count.player-count-" + n);
        el.innerHTML = "";
        if (n === exports.players.turn)
            el.append.apply(el, (0, tslib_1.__spreadArray)([], (0, tslib_1.__read)(deck.map(function (card, i) {
                var el = (0, card_1.createCardElement)(card.color, card.value);
                el.addEventListener("click", function () {
                    var turn = exports.players.turn;
                    if (play(card)) {
                        deck.splice(i, 1);
                        if (typeof card.value === "string")
                            constants_1.CARD_ACTIONS[card.value]();
                        updatePlayers();
                        if (!deck.length) {
                            //@ts-ignore
                            return (state_1.state.card = {
                                color: "placeholder",
                                value: "Player " + (n + 1) + " wins!",
                            });
                        }
                        if (turn !== exports.players.turn)
                            state_1.state.switching = true;
                    }
                    return;
                });
                return el;
            })), false));
        else
            el.append.apply(el, (0, tslib_1.__spreadArray)([], (0, tslib_1.__read)(deck.map(function (card) {
                var el = (0, card_1.createCardElement)(card.color, card.value);
                el.className = "card placeholder";
                el.textContent = "";
                return el;
            })), false));
        el.append(Object.assign(document.createElement("div"), {
            className: "card-container-pad",
        }));
        counter.textContent = deck.length === 1 ? "UNO!!!" : deck.length.toString();
    });
}
exports.updatePlayers = updatePlayers;


/***/ }),

/***/ "./src/setup.ts":
/*!**********************!*\
  !*** ./src/setup.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setup = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var deck_1 = __webpack_require__(/*! ./deck */ "./src/deck.ts");
var players_1 = __webpack_require__(/*! ./players */ "./src/players.ts");
var state_1 = __webpack_require__(/*! ./state */ "./src/state.ts");
function setup() {
    var e_1, _a, e_2, _b;
    try {
        for (var _c = (0, tslib_1.__values)([0, 0, 0, 0, 0, 0, 0]), _d = _c.next(); !_d.done; _d = _c.next()) {
            var _ = _d.value;
            try {
                for (var players_2 = (e_2 = void 0, (0, tslib_1.__values)(players_1.players)), players_2_1 = players_2.next(); !players_2_1.done; players_2_1 = players_2.next()) {
                    var player = players_2_1.value;
                    player.push((0, deck_1.draw)());
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (players_2_1 && !players_2_1.done && (_b = players_2.return)) _b.call(players_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var start = (0, deck_1.draw)();
    while (typeof start.value !== "number") {
        deck_1.deck.push(start);
        start = (0, deck_1.draw)();
    }
    state_1.state.card = start;
    deck_1.played.push(start);
    (0, players_1.updatePlayers)();
    document.querySelector(".draw-button").addEventListener("click", function () {
        var drawn = (0, deck_1.draw)();
        players_1.players[players_1.players.turn].unshift(drawn);
        (0, players_1.updatePlayers)();
    });
    document.querySelector(".switch-button").addEventListener("click", function () {
        state_1.state.switching = false;
    });
}
exports.setup = setup;


/***/ }),

/***/ "./src/state.ts":
/*!**********************!*\
  !*** ./src/state.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.state = void 0;
var card_1 = __webpack_require__(/*! ./card */ "./src/card.ts");
var card = {
    color: "rainbow",
    value: "wild4",
};
var reversed = false;
var switching = false;
exports.state = {
    set card(v) {
        card = v;
        document.querySelector(".deck").replaceChild((0, card_1.createCardElement)(card.color, card.value, true), document.querySelector(".deck .card"));
    },
    get card() {
        return card;
    },
    set reversed(v) {
        reversed = v;
    },
    get reversed() {
        return reversed;
    },
    set switching(v) {
        switching = v;
        document.querySelector(".switch-cover").classList[switching ? "add" : "remove"]("enabled");
    },
    get switching() {
        return switching;
    },
};


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var deck_1 = __webpack_require__(/*! ./deck */ "./src/deck.ts");
var init_1 = __webpack_require__(/*! ./init */ "./src/init.ts");
var setup_1 = __webpack_require__(/*! ./setup */ "./src/setup.ts");
(0, init_1.init)();
(0, setup_1.setup)();
deck_1.deck;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzlPQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BLGdFQUE4QjtBQUM5QixnRUFBOEI7QUFDOUIsbUVBQWdDO0FBRWhDLGVBQUksR0FBRSxDQUFDO0FBRVAsaUJBQUssR0FBRSxDQUFDO0FBRVIsV0FBSSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5vZHVlbC8uL3NyYy9jYXJkLnRzIiwid2VicGFjazovL3Vub2R1ZWwvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL3Vub2R1ZWwvLi9zcmMvZGVjay50cyIsIndlYnBhY2s6Ly91bm9kdWVsLy4vc3JjL2luaXQudHMiLCJ3ZWJwYWNrOi8vdW5vZHVlbC8uL3NyYy9wbGF5ZXJzLnRzIiwid2VicGFjazovL3Vub2R1ZWwvLi9zcmMvc2V0dXAudHMiLCJ3ZWJwYWNrOi8vdW5vZHVlbC8uL3NyYy9zdGF0ZS50cyIsIndlYnBhY2s6Ly91bm9kdWVsLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly91bm9kdWVsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Vub2R1ZWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Vub2R1ZWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly91bm9kdWVsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdW5vZHVlbC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTWU1CT0xTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBDYXJkQ29sb3IsIENhcmRWYWx1ZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXJkRWxlbWVudChjb2xvcjogQ2FyZENvbG9yLCB2YWx1ZTogQ2FyZFZhbHVlLCB0aGljYz86IGJvb2xlYW4pIHtcbiAgICByZXR1cm4gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhjcmVhdGVDYXJkSFRNTChjb2xvciwgdmFsdWUsIHRoaWNjKSwgXCJ0ZXh0L2h0bWxcIikuYm9keS5jaGlsZE5vZGVzWzBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyZEhUTUwoY29sb3I6IENhcmRDb2xvciwgdmFsdWU6IENhcmRWYWx1ZSwgdGhpY2M/OiBib29sZWFuKSB7XG4gICAgcmV0dXJuIC8qaHRtbCovIGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgJHtjb2xvcn0gdmFsdWUtJHt2YWx1ZX0ke3RoaWNjID8gXCIgdGhpY2NcIiA6IFwiXCJ9XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdmFsdWVcIj4ke3R5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiA/IHZhbHVlIDogU1lNQk9MU1t2YWx1ZV19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xufVxuIiwiaW1wb3J0IHsgZHJhdyB9IGZyb20gXCIuL2RlY2tcIjtcbmltcG9ydCB7IHBsYXllcnMgfSBmcm9tIFwiLi9wbGF5ZXJzXCI7XG5pbXBvcnQgeyBzdGF0ZSB9IGZyb20gXCIuL3N0YXRlXCI7XG5cbmV4cG9ydCBjb25zdCBDQVJEX1RZUEVTID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIFwicmV2ZXJzZVwiLCBcInNraXBcIiwgXCJkcmF3MlwiXSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IENBUkRfVkFMVUVTID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIFwicmV2ZXJzZVwiLCBcInNraXBcIiwgXCJkcmF3MlwiLCBcIndpbGRcIiwgXCJ3aWxkNFwiXSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IENBUkRfQ09MT1JTID0gW1wicmVkXCIsIFwieWVsbG93XCIsIFwiZ3JlZW5cIiwgXCJibHVlXCJdIGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgQ0FSRF9BQ1RJT05TID0ge1xuICAgIHJldmVyc2U6ICgpID0+IHtcbiAgICAgICAgc3RhdGUucmV2ZXJzZWQgPSAhc3RhdGUucmV2ZXJzZWQ7XG4gICAgICAgIHBsYXllcnMudHVybiA9ICgoKHBsYXllcnMudHVybiArIChzdGF0ZS5yZXZlcnNlZCA/IC0xIDogMSkpICUgUExBWUVSX0NPVU5UKSArIFBMQVlFUl9DT1VOVCkgJSBQTEFZRVJfQ09VTlQ7XG4gICAgfSxcbiAgICBza2lwOiAoKSA9PiAocGxheWVycy50dXJuID0gKHBsYXllcnMudHVybiArIDEpICUgUExBWUVSX0NPVU5UKSxcbiAgICBkcmF3MjogKCkgPT4gcGxheWVyc1twbGF5ZXJzLnR1cm5dLnVuc2hpZnQoZHJhdygpLCBkcmF3KCkpLFxuICAgIHdpbGQ6ICgpID0+IHZvaWQgMCxcbiAgICB3aWxkNDogKCkgPT4gcGxheWVyc1twbGF5ZXJzLnR1cm5dLnVuc2hpZnQoZHJhdygpLCBkcmF3KCksIGRyYXcoKSwgZHJhdygpKSxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBQTEFZRVJfQ09VTlQgPSAyO1xuXG5leHBvcnQgY29uc3QgU1lNQk9MUyA9IHtcbiAgICByZXZlcnNlOiBcIvCflIRcIixcbiAgICBza2lwOiBcIuKDoFwiLFxuICAgIGRyYXcyOiBcIuKelTLvuI/ig6NcIixcbiAgICB3aWxkOiBcIvCfjIhcIixcbiAgICB3aWxkNDogXCLwn4yINO+4j+KDo1wiLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IE5BTUVTID0ge1xuICAgIHJldmVyc2U6IFwicmV2ZXJzZVwiLFxuICAgIHNraXA6IFwic2tpcFwiLFxuICAgIGRyYXcyOiBcImRyYXcgMlwiLFxuICAgIHdpbGQ6IFwid2lsZFwiLFxuICAgIHdpbGQ0OiBcIndpbGQgZHJhdyA0XCIsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgQ09MT1JTID0ge1xuICAgIHJlZDogXCIjRDMxMDE5XCIsXG4gICAgeWVsbG93OiBcIiNFRUMzMTRcIixcbiAgICBncmVlbjogXCIjMEE4NTJFXCIsXG4gICAgYmx1ZTogXCIjMTU4QkNGXCIsXG59IGFzIGNvbnN0O1xuIiwiaW1wb3J0IHsgQ0FSRF9DT0xPUlMsIENBUkRfVFlQRVMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgZGVjayA9IHNodWZmbGUoY3JlYXRlRGVjaygpKTtcblxuZXhwb3J0IGNvbnN0IHBsYXllZCA9IFtdIGFzIENhcmRbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURlY2soKSB7XG4gICAgY29uc3QgZGVjayA9IFtdIGFzIENhcmRbXTtcblxuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgQ0FSRF9UWVBFUykge1xuICAgICAgICBmb3IgKGNvbnN0IGNvbG9yIG9mIENBUkRfQ09MT1JTKSB7XG4gICAgICAgICAgICBkZWNrLnB1c2goeyBjb2xvciwgdmFsdWUgfSk7XG4gICAgICAgICAgICBkZWNrLnB1c2goeyBjb2xvciwgdmFsdWUgfSk7XG4gICAgICAgICAgICBkZWNrLnB1c2goeyBjb2xvciwgdmFsdWUgfSk7XG4gICAgICAgICAgICBkZWNrLnB1c2goeyBjb2xvciwgdmFsdWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IF8gb2YgWzAsIDAsIDAsIDBdKSB7XG4gICAgICAgIGRlY2sucHVzaCh7IGNvbG9yOiBcInJhaW5ib3dcIiwgdmFsdWU6IFwid2lsZFwiIH0pO1xuICAgICAgICBkZWNrLnB1c2goeyBjb2xvcjogXCJyYWluYm93XCIsIHZhbHVlOiBcIndpbGQ0XCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaHVmZmxlKGRlY2s6IENhcmRbXSkge1xuICAgIGZvciAobGV0IGkgPSBkZWNrLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICBjb25zdCB0ZW1wID0gZGVja1tpXTtcbiAgICAgICAgZGVja1tpXSA9IGRlY2tbal07XG4gICAgICAgIGRlY2tbal0gPSB0ZW1wO1xuICAgIH1cblxuICAgIHJldHVybiBkZWNrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhdygpIHtcbiAgICBsZXQgY2FyZCA9IGRlY2suc2hpZnQoKTtcblxuICAgIGlmICghY2FyZCkge1xuICAgICAgICBkZWNrLmxlbmd0aCA9IDA7XG5cbiAgICAgICAgZGVjay5wdXNoKC4uLnNodWZmbGUocGxheWVkKSk7XG5cbiAgICAgICAgcGxheWVkLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgY2FyZCA9IGRlY2suc2hpZnQoKSE7XG5cbiAgICByZXR1cm4gY2FyZDtcbn1cbiIsImltcG9ydCB7IENBUkRfQ09MT1JTLCBDQVJEX1ZBTFVFUywgQ09MT1JTLCBOQU1FUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChcbiAgICAgICAgLi4uQXJyYXkuZnJvbShcbiAgICAgICAgICAgIG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoXG4gICAgICAgICAgICAgICAgLypodG1sKi8gYFxuPGRpdiBjbGFzcz1cImdhbWVcIj5cbiAgICA8bWFpbiBjbGFzcz1cImR1ZWwtY29udGFpbmVyXCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGxheWVyIHBsYXllci0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXItcGFkXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxoMiBjbGFzcz1cInBsYXllci1jb3VudCBwbGF5ZXItY291bnQtMCBsZWZ0LWFsaWduXCI+MDwvaDI+XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCB0aGljYyBwbGFjZWhvbGRlclwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcmF3XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRyYXctYnV0dG9uXCI+RHJhdzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8aDIgY2xhc3M9XCJwbGF5ZXItY291bnQgcGxheWVyLWNvdW50LTEgcmlnaHQtYWxpZ25cIj4wPC9oMj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBsYXllciBwbGF5ZXItMVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGFpbmVyLXBhZFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8L21haW4+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3dpdGNoLWNvdmVyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJzd2l0Y2gtYnV0dG9uXCI+Q2xpY2sgdG8gY29udGludWUgdGhlIGdhbWU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuICAgIGAsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0L2h0bWxcIlxuICAgICAgICAgICAgKS5ib2R5LmNoaWxkTm9kZXNcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiksIHtcbiAgICAgICAgICAgIHRleHRDb250ZW50OiAvKmNzcyovIGBcbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcnNjcm9sbC1iZWhhdmlvdXI6IG5vbmU7XG59XG5cbmJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbi5nYW1lIHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1pbi13aWR0aDogODAwcHg7XG4gICAgXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG5cbiAgICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y0ZjRmNDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5kdWVsLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmR1ZWwtY29udGFpbmVyID4gKiB7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG59XG5cbi5maWVsZCB7XG4gICAgZmxleDogMTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczsgY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uZGVjayB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG4uZHJhdyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG4uZHJhdy1idXR0b24ge1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zd2l0Y2gtYnV0dG9uIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGxheWVyIHtcbiAgICBtaW4td2lkdGg6IDgwcHg7XG4gICAgXG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgXG4gICAgcGFkZGluZzogMC4yNXJlbTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICBvdmVyZmxvdzogYXV0bztcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBsYXllci1jb3VudCB7XG4gICAgbWluLXdpZHRoOiA3MHB4O1xuXG4gICAgZmxleC1zaHJpbms6IDogMDs7XG5cbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xuXG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ubGVmdC1hbGlnbiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnJpZ2h0LWFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBnYXA6IDAuMjVyZW07XG5cbiAgICBtaW4taGVpZ2h0OiBtaW4tY29udGVudDtcbn1cblxuLmNhcmQtY29udGFpbmVyLXBhZCB7XG4gICAgaGVpZ2h0OiAwLjI1cmVtO1xuXG4gICAgd2lkdGg6IDcwcHg7XG5cbiAgICBmbGV4LXNocmluazogMDtcbn1cblxuLnN3aXRjaC1jb3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2ZiZmJmYjtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcblxuICAgIG9wYWNpdHk6IDA7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcblxuICAgIHdpZHRoOiA3OThweDtcbiAgICBoZWlnaHQ6IDI5OHB4O1xuXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5zd2l0Y2gtY292ZXIuZW5hYmxlZCB7XG4gICAgb3BhY2l0eTogMTtcblxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4vKiBDU1MgdG8gcmVuZGVyIGNhcmRzICovXG5cbmRpdi5jYXJkIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIFxuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgIHBhZGRpbmc6IDAuNXJlbTtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcblxuICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggIzAwMDAwMDtcblxuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5kaXYuY2FyZCBwLmNhcmQtdmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuZGl2LmNhcmQudGhpY2Mge1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgIHRleHQtc2hhZG93OiAycHggMnB4ICMwMDAwMDA7XG59XG5cbmRpdi5jYXJkLnRoaWNjIHAuY2FyZC12YWx1ZSB7XG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xufVxuXG5kaXYuY2FyZC5yYWluYm93IHtcbiAgICBiYWNrZ3JvdW5kOiAjMWExYTFhO1xufVxuJHtDQVJEX0NPTE9SUy5tYXAoXG4gICAgKGNvbG9yKSA9PiAvKmNzcyovIGBcbmRpdi5jYXJkLiR7Y29sb3J9IHtcbiAgICBiYWNrZ3JvdW5kOiAke0NPTE9SU1tjb2xvcl19O1xufWBcbikuam9pbihcIlxcblwiKX1cbiR7Q0FSRF9WQUxVRVMubWFwKFxuICAgICh2YWx1ZSkgPT4gLypjc3MqLyBgXG5kaXYuY2FyZC52YWx1ZS0ke3ZhbHVlfTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIiR7dHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiID8gdmFsdWUgOiBOQU1FU1t2YWx1ZV19XCI7XG4gICAgZm9udC1zaXplOiAke3R5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiA/IDAuOCA6IDAuNTV9cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMC41cmVtO1xuICAgIHRvcDogMC41cmVtO1xufVxuXG5kaXYuY2FyZC50aGljYy52YWx1ZS0ke3ZhbHVlfTo6YmVmb3JlIHtcbiAgICBmb250LXNpemU6ICR7dHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiID8gMS4yNSA6IDF9cmVtO1xufWBcbikuam9pbihcIlxcblwiKX1cbiR7Q0FSRF9WQUxVRVMubWFwKFxuICAgICh2YWx1ZSkgPT4gLypjc3MqLyBgXG5kaXYuY2FyZC52YWx1ZS0ke3ZhbHVlfTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiJHt0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgPyB2YWx1ZSA6IE5BTUVTW3ZhbHVlXX1cIjtcbiAgICBmb250LXNpemU6ICR7dHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiID8gMC44IDogMC41NX1yZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMC41cmVtO1xuICAgIGJvdHRvbTogMC41cmVtO1xufVxuXG5kaXYuY2FyZC50aGljYy52YWx1ZS0ke3ZhbHVlfTo6YWZ0ZXIge1xuICAgIGZvbnQtc2l6ZTogJHt0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgPyAxLjI1IDogMX1yZW07XG59YFxuKS5qb2luKFwiXFxuXCIpfVxuXG5kaXYuY2FyZC5wbGFjZWhvbGRlciB7XG4gICAgYmFja2dyb3VuZDogI2VlZWVlZTtcbn1cbiAgICAgICAgICAgIGAsXG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlQ2FyZEVsZW1lbnQgfSBmcm9tIFwiLi9jYXJkXCI7XG5pbXBvcnQgeyBDQVJEX0FDVElPTlMsIFBMQVlFUl9DT1VOVCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcGxheWVkIH0gZnJvbSBcIi4vZGVja1wiO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBwbGF5ZXJzID0gT2JqZWN0LmFzc2lnbihbW10sIFtdXSBhcyBDYXJkW11bXSwgeyB0dXJuOiAwIH0pO1xuXG5leHBvcnQgZnVuY3Rpb24gcGxheShjYXJkOiBDYXJkKSB7XG4gICAgY29uc3QgbGFzdCA9IHBsYXllZFtwbGF5ZWQubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAobGFzdC5jb2xvciAhPT0gXCJyYWluYm93XCIgJiYgbGFzdC5jb2xvciAhPT0gY2FyZC5jb2xvciAmJiBjYXJkLmNvbG9yICE9PSBcInJhaW5ib3dcIiAmJiBsYXN0LnZhbHVlICE9PSBjYXJkLnZhbHVlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBwbGF5ZXJzLnR1cm4gPSAoKChwbGF5ZXJzLnR1cm4gKyAoc3RhdGUucmV2ZXJzZWQgPyAtMSA6IDEpKSAlIFBMQVlFUl9DT1VOVCkgKyBQTEFZRVJfQ09VTlQpICUgUExBWUVSX0NPVU5UO1xuXG4gICAgcGxheWVkLnB1c2goY2FyZCk7XG5cbiAgICBzdGF0ZS5jYXJkID0gY2FyZDtcblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUGxheWVycygpIHtcbiAgICBwbGF5ZXJzLmZvckVhY2goKGRlY2ssIG4pID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyLnBsYXllci0ke259IC5jYXJkLWNvbnRhaW5lcmApITtcbiAgICAgICAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXItY291bnQucGxheWVyLWNvdW50LSR7bn1gKSE7XG5cbiAgICAgICAgZWwuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICBpZiAobiA9PT0gcGxheWVycy50dXJuKVxuICAgICAgICAgICAgZWwuYXBwZW5kKFxuICAgICAgICAgICAgICAgIC4uLmRlY2subWFwKChjYXJkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gY3JlYXRlQ2FyZEVsZW1lbnQoY2FyZC5jb2xvciwgY2FyZC52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHR1cm4gPSBwbGF5ZXJzLnR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5KGNhcmQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjay5zcGxpY2UoaSwgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhcmQudmFsdWUgPT09IFwic3RyaW5nXCIpIENBUkRfQUNUSU9OU1tjYXJkLnZhbHVlXSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUGxheWVycygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkZWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChzdGF0ZS5jYXJkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicGxhY2Vob2xkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBgUGxheWVyICR7biArIDF9IHdpbnMhYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBDYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHVybiAhPT0gcGxheWVycy50dXJuKSBzdGF0ZS5zd2l0Y2hpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZWwuYXBwZW5kKFxuICAgICAgICAgICAgICAgIC4uLmRlY2subWFwKChjYXJkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gY3JlYXRlQ2FyZEVsZW1lbnQoY2FyZC5jb2xvciwgY2FyZC52YWx1ZSkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gXCJjYXJkIHBsYWNlaG9sZGVyXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgZWwudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBlbC5hcHBlbmQoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiY2FyZC1jb250YWluZXItcGFkXCIsXG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIGNvdW50ZXIudGV4dENvbnRlbnQgPSBkZWNrLmxlbmd0aCA9PT0gMSA/IFwiVU5PISEhXCIgOiBkZWNrLmxlbmd0aC50b1N0cmluZygpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHsgZGVjaywgZHJhdywgcGxheWVkIH0gZnJvbSBcIi4vZGVja1wiO1xuaW1wb3J0IHsgcGxheWVycywgdXBkYXRlUGxheWVycyB9IGZyb20gXCIuL3BsYXllcnNcIjtcbmltcG9ydCB7IHN0YXRlIH0gZnJvbSBcIi4vc3RhdGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwKCkge1xuICAgIGZvciAoY29uc3QgXyBvZiBbMCwgMCwgMCwgMCwgMCwgMCwgMF0pIHtcbiAgICAgICAgZm9yIChjb25zdCBwbGF5ZXIgb2YgcGxheWVycykge1xuICAgICAgICAgICAgcGxheWVyLnB1c2goZHJhdygpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBzdGFydCA9IGRyYXcoKTtcblxuICAgIHdoaWxlICh0eXBlb2Ygc3RhcnQudmFsdWUgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgZGVjay5wdXNoKHN0YXJ0KTtcblxuICAgICAgICBzdGFydCA9IGRyYXcoKTtcbiAgICB9XG5cbiAgICBzdGF0ZS5jYXJkID0gc3RhcnQ7XG5cbiAgICBwbGF5ZWQucHVzaChzdGFydCk7XG5cbiAgICB1cGRhdGVQbGF5ZXJzKCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyYXctYnV0dG9uXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBkcmF3biA9IGRyYXcoKTtcblxuICAgICAgICBwbGF5ZXJzW3BsYXllcnMudHVybl0udW5zaGlmdChkcmF3bik7XG5cbiAgICAgICAgdXBkYXRlUGxheWVycygpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zd2l0Y2gtYnV0dG9uXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBzdGF0ZS5zd2l0Y2hpbmcgPSBmYWxzZTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUNhcmRFbGVtZW50IH0gZnJvbSBcIi4vY2FyZFwiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmxldCBjYXJkID0ge1xuICAgIGNvbG9yOiBcInJhaW5ib3dcIixcbiAgICB2YWx1ZTogXCJ3aWxkNFwiLFxufSBhcyBDYXJkO1xuXG5sZXQgcmV2ZXJzZWQgPSBmYWxzZTtcblxubGV0IHN3aXRjaGluZyA9IGZhbHNlO1xuXG5leHBvcnQgY29uc3Qgc3RhdGUgPSB7XG4gICAgc2V0IGNhcmQodjogQ2FyZCkge1xuICAgICAgICBjYXJkID0gdjtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlY2tcIikhLnJlcGxhY2VDaGlsZChjcmVhdGVDYXJkRWxlbWVudChjYXJkLmNvbG9yLCBjYXJkLnZhbHVlLCB0cnVlKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWNrIC5jYXJkXCIpISk7XG4gICAgfSxcbiAgICBnZXQgY2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgfSxcbiAgICBzZXQgcmV2ZXJzZWQodjogYm9vbGVhbikge1xuICAgICAgICByZXZlcnNlZCA9IHY7XG4gICAgfSxcbiAgICBnZXQgcmV2ZXJzZWQoKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlZDtcbiAgICB9LFxuICAgIHNldCBzd2l0Y2hpbmcodjogYm9vbGVhbikge1xuICAgICAgICBzd2l0Y2hpbmcgPSB2O1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3dpdGNoLWNvdmVyXCIpIS5jbGFzc0xpc3Rbc3dpdGNoaW5nID8gXCJhZGRcIiA6IFwicmVtb3ZlXCJdKFwiZW5hYmxlZFwiKTtcbiAgICB9LFxuICAgIGdldCBzd2l0Y2hpbmcoKSB7XG4gICAgICAgIHJldHVybiBzd2l0Y2hpbmc7XG4gICAgfSxcbn07XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZGVjayB9IGZyb20gXCIuL2RlY2tcIjtcbmltcG9ydCB7IGluaXQgfSBmcm9tIFwiLi9pbml0XCI7XG5pbXBvcnQgeyBzZXR1cCB9IGZyb20gXCIuL3NldHVwXCI7XG5cbmluaXQoKTtcblxuc2V0dXAoKTtcblxuZGVjaztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==