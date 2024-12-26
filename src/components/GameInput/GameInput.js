import React from 'react';
import { validateInput, validateSubmittion } from '../../utils';
import { TentatentativeGuessContext } from "../../contexts/index"

function GameInput({ handleSubmittion, isDisable}) {
  const { state, dispatch } = React.useContext(TentatentativeGuessContext)
  function handleInputChange(e) {
    let { value } = e.target;
    value = value.toUpperCase();
    if (validateInput(value)) {
      dispatch({ type: "inputTyping", value: value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateSubmittion(state)) {
      handleSubmittion(state);
      dispatch({ type: "inputTyping", value: '' });
    }
  }

  return (
    <>
      <form
        className='guess-input-wrapper'
        onSubmit={handleSubmit}
      >
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          required
          pattern=".{5}"
          id='guess-input'
          type='text'
          value={state}
          onChange={(e) => handleInputChange(e)}
          disabled={isDisable !== null}
        />
      </form>
    </>
  );
}

export default GameInput;
