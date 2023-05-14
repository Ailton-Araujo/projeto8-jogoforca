import Button from "./Button";
import { Letters } from "./styled/Letters.styled";

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
  setGameEnd,
}) {
  return <Letters>
    {letters.map((letter) => {
      return (
        <Button
        key={letter}
          data-test="letter"
          letter={letter}
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
          renderMysteryWord={renderMysteryWord}
          setGameEnd={setGameEnd}
        />
      );
    })}
  </Letters>;
}
