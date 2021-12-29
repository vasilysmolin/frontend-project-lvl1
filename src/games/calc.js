import {
  play, minValue, maxValue,
} from '../index.js';

import getRandomArbitrary from '../utils.js';

const DESCRIPTION = 'What is the result of the expression?';
const OPERATORS = ['+', '-', '*'];

function OperatorsException(message) {
  return message;
}

function calculate(numberOne, numberTwo, operator) {
  switch (operator) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    default:
      throw new OperatorsException(`Not found operator: ${operator}!`);
  }
}

export default function start() {
  const generateRound = () => {
    const numberOne = getRandomArbitrary(minValue, maxValue);
    const numberTwo = getRandomArbitrary(minValue, maxValue);
    const operator = OPERATORS[Math.floor(Math.random() * OPERATORS.length)];
    const answer = calculate(numberOne, numberTwo, operator).toString();
    const question = `${numberOne} ${operator} ${numberTwo}`;
    return [question, answer];
  };
  play(DESCRIPTION, generateRound);
}
