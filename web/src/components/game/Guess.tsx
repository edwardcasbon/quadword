import React from "react";

export default function Guess({ guess }: { guess: string }) {
    return (
        <div className="game__guess">
            <p>{guess}</p>
        </div>
    );
}
