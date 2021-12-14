import {
  play, MIN_VALUE, MAX_VALUE, getRandomArbitrary,
} from '../index.js';

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0 || num === 1) {
    return false;
  }
  let i = 3;
  const maxFactor = Math.sqrt(num);
  while (i <= maxFactor) {
    if (num % i === 0) {
      return false;
    }
    i += 2;
  }
  return true;
}

export default function start() {
  const generateRound = () => {
    const question = getRandomArbitrary(MIN_VALUE, MAX_VALUE);
    const answer = isPrime(question) ? 'yes' : 'no';
    return [question, answer];
  };
  play(DESCRIPTION, generateRound);
}
