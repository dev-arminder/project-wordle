import React from 'react';
import { range } from '../../utils'
import { MAX_LENGTH_OF_WORD } from '../../constants'
import { checkGuess } from '../../game-helpers'

function Guess({ value, correctGuess }) {
  const checkCorrectness = checkGuess(value, correctGuess);
  return (
    <p className='guess'>
      {range(MAX_LENGTH_OF_WORD).map((num) => (
        <span className={value ? `cell ${checkCorrectness[num].status}`: 'cell'} key={num}>
          {value ? value[num]: undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
