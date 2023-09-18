import { fetchApi } from "../fetches/api";

export const getPointsForGuess = async (
    word: string = "",
    guess: string = ""
): Promise<number> => {
    let points = 0;

    // Check if guess is a valid word
    const apiWord = await fetchApi(`/word/${guess}`);
    if (!apiWord?.word) {
        return 0;
    }

    const wordArray = word.split("");
    const guessArray = guess.split("");

    for (let i = 0; i < guessArray.length; i++) {
        const guessLetter = guessArray[i];
        const guessedLetterIndex = wordArray.findIndex(
            (letter) => letter === guessLetter
        );
        if (guessedLetterIndex !== -1) {
            wordArray[guessedLetterIndex] = "";
            points = points + 1;
        }
    }
    return points;
};
