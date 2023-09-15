import React from "react";

const keys = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m", "backspace"],
];

export default function Keyboard({
    onUpdate,
}: {
    onUpdate: (key: string) => void;
}) {
    return (
        <div className="game__keyboard">
            {keys.map((row, index) => (
                <div className="game__keyboard__row" key={index}>
                    {row.map((key) => (
                        <button
                            key={key}
                            onClick={() => {
                                onUpdate(key);
                            }}
                        >
                            {key}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
}
