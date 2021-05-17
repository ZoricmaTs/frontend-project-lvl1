import getRandomInt from './random-num.js';
import { cons } from '@hexlet/pairs';
import game from './game.js';

const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
      break;
    case '-':
      return a - b;
      break;
    case '*':
      return a * b;
      break;
  }
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
}