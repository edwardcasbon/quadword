import React, { useEffect, useState } from "react";
import Points from "../components/game/Points";
import Lives from "../components/game/Lives";
import Word from "../components/game/Word";
import Guess from "../components/game/Guess";
import Keyboard from "../components/game/Keyboard";
import { useApi } from "../hooks/useApi";

export default function GameView() {
    const [points, setPoints] = useState(0);
    const [lives, setLives] = useState(4);
    const [word, setWord] = useState("quad");
    const [guess, setGuess] = useState([]);

    useApi(
        "/word",
        (word) => {
            if (word.word) {
                setWord(word.word);
            }
        },
        []
    );

    function onKeyboardUpdate(key: string): void {
        let newGuess = guess;
        if (key === "backspace") {
            newGuess.pop();
        } else {
            newGuess.push(key);
        }
        setGuess([...newGuess]);
    }

    useEffect(() => {
        console.log(`Guess updated to ${guess.join("")}`);
    }, [guess]);

    return (
        <section className="game">
            <div className="game__stats">
                <Points points={points} />
                <Lives lives={lives} />
            </div>
            <Word word={word} />
            <Guess guess={guess.join("")} />
            <Keyboard onUpdate={onKeyboardUpdate} />
        </section>
    );
}
