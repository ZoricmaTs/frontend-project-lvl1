import { cons } from '@hexlet/pairs';
import getRandomInt from '../random-num.js';
import game from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  const aNum = Math.abs(a);
  const bNum = Math.abs(b);
  const iter = (divisor) => {
    if ((aNum % divisor === 0) && (bNum % divisor === 0)) {
      return divisor;
    }

    return iter(divisor - 1);
  };

  return iter(Math.min(aNum, bNum));
};

const createBrainGcd = () => {
  const a = getRandomInt(-100, 100);
  const b = getRandomInt(-100, 100);
  const result = String(gcd(a, b));
  const question = `${a} ${b}`;
  return cons(question, result);
};

export default () => {
  game(gameDescription, createBrainGcd);
};
