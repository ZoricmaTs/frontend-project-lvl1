import { cons } from '@hexlet/pairs';
import getRandomInt from '../random-num.js';
import game from '../index.js';

const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      result = 0;
  }

  return result;
};

const createBrainCalc = () => {
  const a = getRandomInt(0, 100);
  const b = getRandomInt(0, 100);
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const result = String(calculate(a, b, operator));
  const question = `${a} ${operator} ${b}`;
  return cons(question, result);
};

export default () => {
  game(gameDescription, createBrainCalc);
};
