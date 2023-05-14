import { remove } from "remove-accents";
import { ButtonLetter } from "./styled/ButtonLetter.styled";

export default function Buttom({
  letter,
  renderMysteryWord,
  setGame,
  statusButton,
  clickedButtons,
  setClickedButtons,
  numberError,
  setNumerError,
  word,
  setMysteryWord,
  setGameEnd,
}) {
  function guess() {
    setClickedButtons([...clickedButtons, letter]);
    !remove(word).split("").includes(letter) && numberError++;
    setNumerError(numberError);
    const tempMysteryWord = renderMysteryWord([...clickedButtons, letter], word);
    setMysteryWord(tempMysteryWord);
    if (word === tempMysteryWord) {
      setGame(true);
      setGameEnd("#27AE60");
    }
    if (numberError > 5) {
      setGame(true);
      setGameEnd("#FF0000");
      setMysteryWord(word);
    }
  }

  return (
    <ButtonLetter
      data-test="letter"
      disabled={statusButton === true ? statusButton : false}
      onClick={guess}
    >
      {letter.toUpperCase()}
    </ButtonLetter>
  );
}
