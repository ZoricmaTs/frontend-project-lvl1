import getRandomInt from '../random-num.js';
import game from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
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
