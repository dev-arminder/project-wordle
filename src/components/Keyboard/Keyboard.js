import React from 'react';
import KeyboardRow from './keyboardRow';
import { KEYBOARD_SHAPE } from '../../constants'


function Keyboard(props) {
  return (
      <section>
        {KEYBOARD_SHAPE.map((row, index) => <KeyboardRow columns={row} key={index} {...props}/>)}
      </section>
  )
}

export default React.memo(Keyboard);