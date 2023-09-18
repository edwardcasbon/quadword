import React, { useEffect, useState } from "react";
import Points from "../components/game/Points";
import Lives from "../components/game/Lives";
import Word from "../components/game/Word";
import Guess from "../components/game/Guess";
import Keyboard from "../components/game/Keyboard";
import { useApi } from "../hooks/useApi";
import { getPointsForGuess } from "../utilities/game";

export default function GameView() {
    const [points, setPoints] = useState(0);
    const [lives, setLives] = useState(4);
    const [word, setWord] = useState("quad");
    const [guess, setGuess] = useState([]);
    const [isKeyboardEnabled, setIsKeyboardEnabled] = useState(true);

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
        if (guess.length === 4) {
            (async () => {
                if (guess.join("") !== word) {
                    setIsKeyboardEnabled(false);
                    const score = await getPointsForGuess(word, guess.join(""));
                    if (score === 0) {
                        setLives(lives - 1);
                    } else if (score > 0) {
                        setPoints(points + score);
                        setWord(guess.join(""));
                    }
                }
                setGuess([]);
                setIsKeyboardEnabled(true);
            })();
        }
    }, [guess]);

    useEffect(() => {
        if (lives === 0) {
            console.log("Game over");
            // submit score and redirect to game over page and ask to enter email if don't have email address
        }
    }, [lives]);

    return (
        <section className="game">
            <div className="game__stats">
                <Points points={points} />
                <Lives lives={lives} />
            </div>
            <Word word={word} />
            <Guess guess={guess.join("")} />
            <Keyboard enabled={isKeyboardEnabled} onUpdate={onKeyboardUpdate} />
        </section>
    );
}
