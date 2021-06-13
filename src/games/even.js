import getRandomInt from '../utils.js';
import startGame from "../index";

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const num = getRandomInt(0, 100);
  const result = isEven(num) ? 'yes' : 'no';
  const question = String(num);
  return [question, result];
};

export default () => {
  startGame(description, generateRound);
};
