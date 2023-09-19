import React from "react";

export default function Lives({ lives }: { lives: number }) {
    return (
        <p className="game__lives">
            {lives} <span className="material-symbols-outlined">favorite</span>
        </p>
    );
}
