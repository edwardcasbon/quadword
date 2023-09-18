import React from "react";

const keys = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m", "backspace"],
];

export default function Keyboard({
    onUpdate,
    enabled,
}: {
    onUpdate: (key: string) => void;
    enabled: boolean;
}) {
    return (
        <div className="game__keyboard">
            {keys.map((row, index) => (
                <div className="game__keyboard__row" key={index}>
                    {row.map((key) => (
                        <button
                            key={key}
                            disabled={!enabled}
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
