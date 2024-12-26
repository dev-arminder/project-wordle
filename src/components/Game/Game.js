import React from 'react';

import { sample, isEqual } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GameInput from '../GameInput';
import GameArea from '../GameArea';
import Banner from '../Banner/Banner';
import { Keyboard } from '../Keyboard'
import { GuessProvider } from '../../provider';
import { IoCloseSharp } from "react-icons/io5";

const correctWord = sample(WORDS);

console.log(correctWord);

function Game() {
  const [userGuesses, setUserGuesses] = React.useState([]);
  const [showBanner, setShowBanner] = React.useState(null);
  const [answer, setAnswer] = React.useState(correctWord);
  const url = `https://wordfind.org/dictionary/${correctWord}`

  function handleSubmit(tentatentativeGuess) {
    const nextGuesses = [...userGuesses, tentatentativeGuess];
    setUserGuesses(nextGuesses);

    if (isEqual(tentatentativeGuess, answer)) {
      setShowBanner('win');
    } else if (userGuesses.length + 1 >= NUM_OF_GUESSES_ALLOWED) {
      setShowBanner('loose');
    }
  }

  function resetGame() {
    setUserGuesses([]);
    setShowBanner(null);

    const newWord = sample(WORDS);
    setAnswer(newWord);
    console.log({ newWord })
  }

  const winningBanner = (
    <div className="banner__outer">
      <div className='banner__header'>
        <div>You Win🥳</div>
        <div className="banner__close-btn" onClick={resetGame}><IoCloseSharp /></div>
      </div>
      <div className='banner'>
        <div className="banner__body">
          The answer was: {"\n"}
        </div>
        <div className='banner__game--anwer'>
          { correctWord }
        </div>
        <a href={url} target='blank'>What does this word mean ?</a>
        <button onClick={resetGame}>Restart Game</button>
      </div>
    </div>
  );

  const looseBanner = (
    <div className="banner__outer">
      <div className='banner__header'>
        <div>You Loose😭</div>
        <div className="banner__close-btn" onClick={resetGame}><IoCloseSharp /></div>
      </div>
      <div className='banner'>
        <div className="banner__body">
          The answer was: {"\n"}
        </div>
        <div className='banner__game--anwer'>
          { correctWord }
        </div>
        <a href={url} target='blank'>What does this word mean ?</a>
        <button onClick={resetGame}>Restart Game</button>
      </div>
    </div>
  );

  return (
    <>
      {showBanner === 'win' ? <Banner> {winningBanner} </Banner> : null}
      {showBanner === 'loose' ? <Banner> {looseBanner} </Banner> : null}

      <GameArea userGuesses={userGuesses} correctGuess={answer} />
      <GuessProvider>
        <GameInput handleSubmittion={handleSubmit} isDisable={showBanner}/>
        <Keyboard handleSubmittion={handleSubmit} />
      </GuessProvider>


    </>
  );
}

export default Game;
