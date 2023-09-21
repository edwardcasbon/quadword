import React from "react";

export default function Guess({
    guess,
    wobbling,
    onAnimationEnd,
}: {
    guess: string;
    wobbling: boolean;
    onAnimationEnd: () => void;
}) {
    return (
        <div
            className={`game__guess ${wobbling ? "game__guess--wobble" : ""}`}
            onAnimationEnd={onAnimationEnd}
        >
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
