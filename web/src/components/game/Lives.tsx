import React, { useState, useEffect } from "react";

export default function Lives({ lives }: { lives: number }) {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setIsAnimating(true);
    }, [lives]);

    return (
        <p
            className={`game__lives ${
                isAnimating ? "game__lives--shrink" : ""
            }`}
            onAnimationEnd={() => {
                setIsAnimating(false);
            }}
        >
            {lives} <span className="material-symbols-outlined">favorite</span>
        </p>
    );
}
