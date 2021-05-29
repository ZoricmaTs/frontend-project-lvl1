import getRandomInt from '../random-num.js';
import game from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const createBrainPrime = () => {
  const num = getRandomInt(0, 100);
  const result = isPrime(num) ? 'yes' : 'no';
  const question = String(num);
  return [question, result];
};

export default () => {
  game(gameDescription, createBrainPrime);
};
