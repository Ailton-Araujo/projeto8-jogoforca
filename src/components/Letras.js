import Button from "./Button";

export default function Letras({
  letters,
  setGame,
  statusGame,
  clickedButtons,
  setClickedButtons,
  numberError,
  setNumerError,
  word,
  mysteryWord,
  setMysteryWord,
  renderMysteryWord,
  setGameEnd
}) {
  return letters.map((i) => (
    <Button data-test="letter"
      letter={i}
      setGame={setGame}
      statusButton={
        statusGame===true
          ? statusGame
          : clickedButtons.includes(i)
          ? true
          : false
      }
      clickedButtons={clickedButtons}
      setClickedButtons={setClickedButtons}
      numberError={numberError}
      setNumerError={setNumerError}
      word={word}
      mysteryWord={mysteryWord}
      setMysteryWord={setMysteryWord}
      renderMysteryWord={renderMysteryWord}
      setGameEnd={setGameEnd}
    />
  ));
}
