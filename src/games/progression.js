import {
  maxValue, minValue, play,
} from '../index.js';

import getRandomArbitrary from '../utils.js';

const DESCRIPTION = 'What number is missing in the progression?';

export default function start() {
  const generateRound = () => {
    const startStep = getRandomArbitrary(minValue, maxValue);
    const progressionStep = getRandomArbitrary(minValue, maxValue);
    const progressionLength = maxValue;
    const hiddenIndex = getRandomArbitrary(minValue, progressionLength - 1);
    const numbers = [];
    let answer;
    for (let i = minValue; i < progressionLength; i += 1) {
      numbers[i] = startStep + i * progressionStep;
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
