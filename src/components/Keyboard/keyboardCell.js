import React from "react";
import { FaBackspace } from "react-icons/fa";
import { MAX_LENGTH_OF_WORD } from '../../constants';
import { validateSubmittion } from '../../utils';
import { TentatentativeGuessContext } from '../../contexts/index';

function KeyboardCell({ cell, handleSubmittion }) {
  const { state: tentatentativeGuessVal, dispatch } = React.useContext(TentatentativeGuessContext);
  let child = null
  let isDisabled = false;

  if (cell.icon && cell.icon === 'FaBackspace') {
    child = <span className="icon-outer" data-val={cell.icon}><FaBackspace /> </span>
    isDisabled = tentatentativeGuessVal.length < 1;
  }

  if (cell.name) {
    child = cell.name
  }

  if (cell.name === 'Enter') {
    isDisabled = tentatentativeGuessVal.length < MAX_LENGTH_OF_WORD;
  }

  function handleClick(e) {
    const val = e.target.dataset.val;
    let nextGuesses = tentatentativeGuessVal;
    if (val === 'FaBackspace') {
      nextGuesses = nextGuesses.slice(0, nextGuesses.length - 1);
    } else if (val === 'Enter') {
      // Handle Enter Fun
      if (validateSubmittion(tentatentativeGuessVal)) {
        handleSubmittion(tentatentativeGuessVal);
        dispatch({ type: "inputTyping", value: '' });
      }
    } else {
      nextGuesses += val;
    }

    if (tentatentativeGuessVal.length === MAX_LENGTH_OF_WORD) {
      return;
    }
    dispatch({ type: "keyboardTyping", value: nextGuesses })

  }

  return (
    <button className="keyboard__cell" data-val={cell.icon || cell.name} disabled={isDisabled} onClick={handleClick}>
      {child}
    </button>
  )
}

export default KeyboardCell;


