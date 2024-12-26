import React from "react";
import KeyboardCell from "./keyboardCell";

function KeyboardRow({ columns, ...props }){
  return (
    <div className="keyboard__row">
      { columns.map((cell, index) => <KeyboardCell cell={cell} key={index} {...props}/> ) }
    </div>
  )
}

export default KeyboardRow;