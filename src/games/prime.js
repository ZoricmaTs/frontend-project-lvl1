import getRandomInt from '../utils.js';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const num = getRandomInt(0, 100);
  const result = isPrime(num) ? 'yes' : 'no';
  const question = String(num);
  return [question, result];
};

export default () => {
  startGame(description, generateRound);
};
