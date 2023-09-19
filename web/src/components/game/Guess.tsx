import React from "react";

export default function Guess({ guess }: { guess: string }) {
    return (
        <div className="game__guess">
            <span>{guess[0]}</span>
            <span>{guess[1]}</span>
            <span>{guess[2]}</span>
            <span>{guess[3]}</span>
        </div>
    );
}
