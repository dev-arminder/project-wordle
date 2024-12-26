import * as React from 'react'
import { TentatentativeGuessContext } from "../contexts/index"

function guessReducer(state, action) {
	console.log(action);
	switch (action.type) {
		case 'keyboardTyping': {
			return action.value;
		}
		case 'inputTyping': {
			return action.value;
		}
		default: {
			throw new Error(`Unhandled action type: ${action.type}`)
		}
	}
}

function GuessProvider({ children }) {
	const [state, dispatch] = React.useReducer(guessReducer, "")
	const value = { state, dispatch }
	return <TentatentativeGuessContext.Provider value={value}>{children}</TentatentativeGuessContext.Provider>
}

export { GuessProvider }