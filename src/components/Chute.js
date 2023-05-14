import { useState } from "react";
import { remove } from "remove-accents";
import { Guess } from "./styled/Guess.styled";

export default function Chute({
  statusGame,
  setGame,
  setNumerError,
  word,
  setMysteryWord,
  setGameEnd,
}) {
  const [guessWord, setGuessWord] = useState("");

  function checkGuess() {
    if (remove(word) === remove(guessWord)) {
      setGame(true);
      setGameEnd("#27AE60");
      setMysteryWord(word);
    } else {
      setGame(true);
      setGameEnd("#FF0000");
      setNumerError(6);
      setMysteryWord(word);
    }
    setGuessWord("");
  }
  return (
    <Guess>
      <p>Já sei a palavra!</p>
      <input
        data-test="guess-input"
        disabled={statusGame === true ? statusGame : false}
        onChange={(e) => setGuessWord(e.target.value)}
        value={guessWord}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            checkGuess();
          }
        }}
        type="text"
      ></input>
      <button
        data-test="guess-button"
        disabled={statusGame === true ? statusGame : false}
        onClick={checkGuess}
      >
        Chutar
      </button>
    </Guess>
  );
}
