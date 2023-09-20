import React from "react";

export default function Guess({ guess }: { guess: string }) {
    return (
        <div className="game__guess">
            {[0, 1, 2, 3].map((index) => (
                <div
                    key={index}
                    className={index === guess.length ? "cursor" : ""}
                >
                    {guess[index]}
                </div>
            ))}
        </div>
    );
}
