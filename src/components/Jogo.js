import { Game } from "./styled/Game.styled";
import { Image } from "./styled/Image.styled";
import { ButtomGame } from "./styled/ButtonGame.styled";

export default function Jogo({
  images,
  words,
  renderMysteryWord,
  setGame,
  clickedButtons,
  setClickedButtons,
  numberError,
  setNumerError,
  word,
  setWord,
  mysteryWord,
  setMysteryWord,
  gameEnd,
  setGameEnd,
}) {
  function renderWord() {
    setGame(false);
    clickedButtons.length = 0;
    setClickedButtons([]);
    setNumerError(0);
    const tempWord = words[Math.floor(Math.random() * words.length)];
    setWord(tempWord);
    setMysteryWord(renderMysteryWord(clickedButtons, tempWord));
    setGameEnd("");
  }
  console.log(word, mysteryWord, clickedButtons);
  return (
    <Game gameEnd={gameEnd}>
      <Image data-test="game-image" src={images[numberError]} />
      <div>
        <ButtomGame
          data-test="choose-word"
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
