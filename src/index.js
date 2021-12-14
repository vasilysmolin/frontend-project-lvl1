import readlineSync from 'readline-sync';

const ROUND_COUNT = 3;
const MIN_VALUE = 1;
const MAX_VALUE = 10;

function play(description, generateRound) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${description}!`);

  for (let roundNumber = 1; roundNumber <= ROUND_COUNT; roundNumber += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}!`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer}! is wrong answer ;(. Correct answer was ${answer}`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
}


function getRandomArbitrary(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

export { MIN_VALUE, MAX_VALUE, getRandomArbitrary, play };
