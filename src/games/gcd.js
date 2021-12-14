import { play, MIN_VALUE, MAX_VALUE, getRandomArbitrary } from '../index.js';

const DESCRIPTION = 'Find the greatest common divisor of given numbers.';

function gcd(n, m) {
  while (n !== m) {
    if (n > m) {
      n = n - m;
    } else {
      m = m - n;
    }
  }
  return n;
}

export default function start() {
  const generateRound = () => {
    const numberOne = getRandomArbitrary(MIN_VALUE, MAX_VALUE);
    const numberTwo = getRandomArbitrary(MIN_VALUE, MAX_VALUE);
    const question = `${numberOne} ${numberTwo}`;
    const answer = gcd(numberOne,numberTwo).toString();
    return [question, answer];
  };
  play(DESCRIPTION, generateRound);
}
