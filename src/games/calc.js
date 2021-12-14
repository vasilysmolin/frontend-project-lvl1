import { play, MIN_VALUE, MAX_VALUE, getRandomArbitrary } from '../index.js';

const DESCRIPTION = 'What is the result of the expression?';
const OPERATORS = ['+', '-', '*'];

function OperatorsException(message) {
  this.message = message;
  this.name = 'exception';
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
    const numberOne = getRandomArbitrary(MIN_VALUE, MAX_VALUE);
    const numberTwo = getRandomArbitrary(MIN_VALUE, MAX_VALUE);
    const operator = OPERATORS[Math.floor(Math.random() * OPERATORS.length)];
    const answer = calculate(numberOne, numberTwo, operator).toString();
    const question = `${numberOne} ${operator} ${numberTwo}`;
    return [question, answer];
  };
  play(DESCRIPTION, generateRound);
}
