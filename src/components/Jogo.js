import { Container } from "./styled/Container.styled";
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
  clickedButtons,
  setClickedButtons,
  renderMysteryWord,
  setGameEnd,
  gameEnd,
}) {
  function renderWord() {
    setGame(false);
    setClickedButtons([]);
    setNumerError(0);
    word = words[Math.floor(Math.random() * words.length)];
    setWord(word);
    setGameEnd("")
  }
  mysteryWord = renderMysteryWord(clickedButtons);
  return (
    <Container gameEnd={gameEnd}>
      <Image test="game-image" src={images[numberError]} />
      <div>
        {console.log(word, mysteryWord, gameEnd)}
        <ButtomGame data-test="choose-word"
          onClick={() => {
            renderWord();
          }}
        >
          Escolher Palavra
        </ButtomGame>
        <p data-test="word">{numberError===6 ? word:mysteryWord}</p>
      </div>
    </Container>
  );
}
