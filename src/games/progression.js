import {
  getRandomArbitrary, MAX_VALUE, MIN_VALUE, play,
} from '../index.js';

const DESCRIPTION = 'What number is missing in the progression?';

export default function start() {
  const generateRound = () => {
    const startStep = getRandomArbitrary(MIN_VALUE, MAX_VALUE);
    const progressionStep = getRandomArbitrary(MIN_VALUE, MAX_VALUE);
    const progressionLength = MAX_VALUE;
    const hiddenIndex = getRandomArbitrary(MIN_VALUE, progressionLength - 1);
    const numbers = [];
    let answer;
    for (let i = MIN_VALUE; i < progressionLength; i += 1) {
      if (i === MIN_VALUE) {
        numbers[i] = startStep + i * progressionStep;
      } else {
        numbers[i] = startStep + i * progressionStep;
      }
      if (i === hiddenIndex) {
        numbers[i] = '..';
        answer = startStep + i * progressionStep;
      }
    }
    const question = numbers.join(' ').trim();
    return [question, answer.toString()];
  };
  play(DESCRIPTION, generateRound);
}
