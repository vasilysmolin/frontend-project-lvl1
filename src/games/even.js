import { play, MIN_VALUE, MAX_VALUE } from '../engine.js';

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

function getRandomArbitrary(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function isEven(number) {
  return number % 2 === 0;
}

export default function start() {
  const generateRound = () => {
    const question = getRandomArbitrary(MIN_VALUE, MAX_VALUE);
    const answer = isEven(question) ? 'yes' : 'no';
    return [question, answer];
  };
  play(DESCRIPTION, generateRound);
}
