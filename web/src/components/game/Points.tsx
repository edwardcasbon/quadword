import React from "react";

export default function Points({ points }: { points: number }) {
    return (
        <p className="game__points">
            <span className="material-symbols-outlined">brightness_high</span>
            {points}{" "}
        </p>
    );
}
