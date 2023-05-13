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


  function renderMysteryWord(Array) {
    return word
      .split("")
      .map((letter) => {
        return Array.includes(remove(letter)) ? letter : " _";
      })
      .join("");
  }

  return (
    <>
      <GlobalSyles />
      <Jogo
        setNumerError={setNumerError}
        numberError={numberError}
        images={Images}
        words={palavras}
        setGame={setGame}
        word={word}
        setWord={setWord}
        mysteryWord={mysteryWord}
        clickedButtons={clickedButtons}
        setClickedButtons={setClickedButtons}
        renderMysteryWord={renderMysteryWord}
        setGameEnd={setGameEnd}
        gameEnd={gameEnd}
      />
      <Letras
        renderMysteryWord={renderMysteryWord}
        letters={alfabeto}
        setGame={setGame}
        statusGame={statusGame}
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
      word={word}
      setNumerError={setNumerError}
      setGame={setGame}
      statusGame={statusGame}
      setGameEnd={setGameEnd}
      />
    </>
  );
}
export default App;
