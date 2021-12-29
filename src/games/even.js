import {
  play, minValue, maxValue,
} from '../index.js';

import getRandomArbitrary from '../utils.js';

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(number) {
  return number % 2 === 0;
}

export default function start() {
  const generateRound = () => {
    const question = getRandomArbitrary(minValue, maxValue);
    const answer = isEven(question) ? 'yes' : 'no';
    return [question, answer];
  };
  play(DESCRIPTION, generateRound);
}
