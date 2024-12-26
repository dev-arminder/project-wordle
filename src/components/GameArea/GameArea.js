import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function GameArea({ userGuesses, correctGuess }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map(function (num) {
        return (
          <Guess key={num} value={userGuesses[num]} correctGuess={correctGuess}/>
        );
      })}
    </div>
  );
}

export default GameArea;
