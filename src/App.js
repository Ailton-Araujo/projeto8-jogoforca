import { useState } from "react";
import { GlobalSyles } from "./components/styled/Global";
import { remove } from "remove-accents";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import Chute from "./components/Chute";

import palavras from "./palavras";
import { alfabeto } from "./components/DataLetters";
import { Images } from "./components/Images";

function App() {
  let [statusGame, setGame] = useState(true);
  let [clickedButtons, setClickedButtons] = useState([]);
  let [numberError, setNumerError] = useState(0);
  let [word, setWord] = useState("");
  let [mysteryWord, setMysteryWord] = useState("");
  let [gameEnd, setGameEnd] = useState("");

  function renderMysteryWord(Array, String) {
    return String.split("")
      .map((letter) => {
        return Array.includes(remove(letter)) ? letter : "_";
      })
      .join("");
  }

  return (
    <>
      <GlobalSyles />
      <Jogo
        images={Images}
        words={palavras}
        renderMysteryWord={renderMysteryWord}
        setGame={setGame}
        clickedButtons={clickedButtons}
        setClickedButtons={setClickedButtons}
        numberError={numberError}
        setNumerError={setNumerError}
        word={word}
        setWord={setWord}
        mysteryWord={mysteryWord}
        setMysteryWord={setMysteryWord}
        gameEnd={gameEnd}
        setGameEnd={setGameEnd}
      />
      <Letras
        letters={alfabeto}
        renderMysteryWord={renderMysteryWord}
        statusGame={statusGame}
        setGame={setGame}
        clickedButtons={clickedButtons}
        setClickedButtons={setClickedButtons}
        numberError={numberError}
        setNumerError={setNumerError}
        word={word}
        mysteryWord={mysteryWord}
        setMysteryWord={setMysteryWord}
        setGameEnd={setGameEnd}
      />
      <Chute
        statusGame={statusGame}
        setGame={setGame}
        setNumerError={setNumerError}
        word={word}
        setMysteryWord={setMysteryWord}
        setGameEnd={setGameEnd}
      />
    </>
  );
}
export default App;
