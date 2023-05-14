import { remove } from "remove-accents";
import { ButtonLetter } from "./styled/ButtonLetter.styled";

export default function Buttom({
  letter,
  setGame,
  statusButton,
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
  function guess() {
    setClickedButtons([...clickedButtons, letter]);
    !remove(word).split("").includes(letter) && numberError++;
    setNumerError(numberError);
    mysteryWord = renderMysteryWord([...clickedButtons, letter],word);
    setMysteryWord(mysteryWord);
    if (word === mysteryWord) {
      setGame(true);
      setGameEnd("#27AE60");
    }
    if (numberError > 5) {
      setGame(true);
      setGameEnd("#FF0000");
      setMysteryWord(word)
    }
  }

  return (
    <ButtonLetter data-test="letter"
      disabled={statusButton === true ? statusButton : false}
      onClick={guess}
    >
      {letter.toUpperCase()}
    </ButtonLetter>
  );
}
