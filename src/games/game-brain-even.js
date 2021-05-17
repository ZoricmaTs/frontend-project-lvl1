import { cons } from '@hexlet/pairs';
import getRandomInt from '../random-num.js';
import game from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const createBrainEven = () => {
  const num = getRandomInt(0, 100);
  const result = isEven(num) ? 'yes' : 'no';
  const question = String(num);
  return cons(question, result);
};

export default () => {
  game(gameDescription, createBrainEven);
};
