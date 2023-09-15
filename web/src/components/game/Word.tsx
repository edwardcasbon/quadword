import React from "react";

export default function Word({ word }: { word: string }) {
    return (
        <div className="game__word">
            <p>{word}</p>
        </div>
    );
}
