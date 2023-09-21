import React, { useEffect, useState } from "react";

export default function Points({ points }: { points: number }) {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setIsAnimating(true);
    }, [points]);

    return (
        <p
            className={`game__points ${
                isAnimating ? "game__points--grow" : ""
            }`}
            onAnimationEnd={() => {
                setIsAnimating(false);
            }}
        >
            <span className="material-symbols-outlined">brightness_high</span>
            {points}{" "}
        </p>
    );
}
