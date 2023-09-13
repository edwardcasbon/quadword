import React from "react";
import { Link } from "react-router-dom";

export default function AboutView() {
    return (
        <>
            <h1>About Quadword</h1>
            <p>
                Quadword is a fun little 4-letter word game, designed to score
                points by producing words using the same or similar letters. The
                more letters you can preserve the more points you gain.
            </p>
            <ul>
                <li>Developer: Edward Casbon</li>
                <li>
                    GitHub:
                    <Link
                        to="https://github.com/edwardcasbon/quadword/"
                        target="_blank"
                    >
                        edwardcasbon/quadword
                    </Link>
                </li>
                <li>Fonts: Google fonts</li>
                <li>Icons: Google fonts</li>
            </ul>
        </>
    );
}
