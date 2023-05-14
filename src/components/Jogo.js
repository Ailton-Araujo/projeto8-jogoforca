import { Game } from "./styled/Game.styled";
import { Image } from "./styled/Image.styled";
import { ButtomGame } from "./styled/ButtonGame.styled";

export default function Jogo({
  setNumerError,
  numberError,
  images,
  words,
  setGame,
  word,
  setWord,
  mysteryWord,
  setMysteryWord,
  clickedButtons,
  setClickedButtons,
  renderMysteryWord,
  setGameEnd,
  gameEnd,
}) {
  function renderWord() {
    setGame(false);
    clickedButtons.length=0;
    setClickedButtons([]);
    setNumerError(0);
    word = words[Math.floor(Math.random() * words.length)];
    setWord(word);
    mysteryWord=""
    setMysteryWord(renderMysteryWord(clickedButtons, word))
    setGameEnd("")
    console.log(word, mysteryWord,clickedButtons)
  }
  console.log(word, mysteryWord,clickedButtons)
  return (
    <Game gameEnd={gameEnd}>
      <Image test="game-image" src={images[numberError]} />
      <div>
        <ButtomGame data-test="choose-word"
          onClick={() => {
            renderWord();
          }}
        >
          Escolher Palavra
        </ButtomGame>
        <p data-test="word">{mysteryWord}</p>
      </div>
    </Game>
  );
}
