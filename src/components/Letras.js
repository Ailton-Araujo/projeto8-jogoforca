import Button from "./Button";
import { Letters } from "./styled/Letters.styled";

export default function Letras({
  letters,
  renderMysteryWord,
  statusGame,
  setGame,
  clickedButtons,
  setClickedButtons,
  numberError,
  setNumerError,
  word,
  mysteryWord,
  setMysteryWord,
  setGameEnd,
}) {
  return <Letters>
    {letters.map((letter) => {
      return (
        <Button
        key={letter}
          letter={letter}
          renderMysteryWord={renderMysteryWord}
          setGame={setGame}
          statusButton={
            statusGame === true
              ? statusGame
              : clickedButtons.includes(letter)
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
          setGameEnd={setGameEnd}
        />
      );
    })}
  </Letters>;
}
