export const CARD_VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "reverse", "skip", "draw2", "wild", "wild4"] as const;

export const CARD_COLORS = ["red", "yellow", "green", "blue"] as const;

export const SYMBOLS = {
    reverse: "🔄",
    skip: "⃠",
    draw2: "➕2️⃣",
    wild: "🌈",
    wild4: "🌈4️⃣",
} as const;

export const NAMES = {
    reverse: "reverse",
    skip: "skip",
    draw2: "draw 2",
    wild: "wild",
    wild4: "wild draw 4",
} as const;
