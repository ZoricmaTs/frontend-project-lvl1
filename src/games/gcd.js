import getRandomInt from '../utils.js';
import game from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const generateRound = () => {
  const a = getRandomInt(0, 100);
  const b = getRandomInt(0, 100);
  const result = String(gcd(a, b));
  const question = `${a} ${b}`;
  return [question, result];
};

export default () => {
  game(description, generateRound);
};
