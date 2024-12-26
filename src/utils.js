import { MAX_LENGTH_OF_WORD } from './constants'

export const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

function isAlpha(str){
  return /^[a-zA-Z]*$/.test(str); 
}

export const validateInput = (word) => {
  if(word.length > MAX_LENGTH_OF_WORD) return false;
  return isAlpha(word)
};

export const validateSubmittion = (word) => {
  return validateInput(word) && word.length == MAX_LENGTH_OF_WORD;
};

export const isEqual = (word, answer) => {
  return word.toLowerCase() === answer.toLowerCase();
};