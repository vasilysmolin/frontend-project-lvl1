import {
  play, minValue, maxValue,
} from '../index.js';

import getRandomArbitrary from '../utils.js';

const DESCRIPTION = 'Find the greatest common divisor of given numbers.';

function gcd(n, m) {
  let firstNum = n;
  let secondNum = m;
  while (firstNum !== secondNum) {
    if (firstNum > secondNum) {
      firstNum -= secondNum;
    } else {
      secondNum -= firstNum;
    }
  }
  return firstNum;
}

export default function start() {
  const generateRound = () => {
    const numberOne = getRandomArbitrary(minValue, maxValue);
    const numberTwo = getRandomArbitrary(minValue, maxValue);
    const question = `${numberOne} ${numberTwo}`;
    const answer = gcd(numberOne, numberTwo).toString();
    return [question, answer];
  };
  play(DESCRIPTION, generateRound);
}
