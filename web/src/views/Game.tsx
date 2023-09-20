import React, { useEffect, useState } from "react";
import Points from "../components/game/Points";
import Lives from "../components/game/Lives";
import Word from "../components/game/Word";
import Guess from "../components/game/Guess";
import Keyboard from "../components/game/Keyboard";
import { useApi } from "../hooks/useApi";
import { getPointsForGuess } from "../utilities/game";
import { fetchApi } from "../fetches/api";
import { useAppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";

export default function GameView() {
    const { user } = useAppContext();
    const [points, setPoints] = useState(0);
    const [lives, setLives] = useState(4);
    const [word, setWord] = useState("quad");
    const [guess, setGuess] = useState([]);
    const [isKeyboardEnabled, setIsKeyboardEnabled] = useState(true);
    const [guesses, setGuesses] = useState([]);

    const navigate = useNavigate();

    useApi(
        "/word",
        (word) => {
            if (word.word) {
                setWord(word.word);
                setGuesses([word.word]);
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
                if (
                    guess.join("") !== word &&
                    guesses.indexOf(guess.join("")) === -1
                ) {
                    setIsKeyboardEnabled(false);
                    const score = await getPointsForGuess(word, guess.join(""));
                    if (score === 0) {
                        setLives(lives - 1);
                    } else if (score > 0) {
                        setPoints(points + score);
                        setWord(guess.join(""));
                        setGuesses([...guesses, guess.join("")]);
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
            (async () => {
                await fetchApi("/score", () => {}, "POST", {
                    user_id: user?.id,
                    score: points,
                });
                navigate(`/game-over?points=${points}`);
            })();
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
