import getRandomInt from '../utils.js';
import startGame from '../index.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const generateRound = () => {
  const a = getRandomInt(0, 10);
  const b = getRandomInt(0, 10);
  const indexOperator = operators[getRandomInt(0, operators.length - 1)];
  const result = String(calculate(a, b, indexOperator));
  const question = `${a} ${indexOperator} ${b}`;
  return [question, result];
};

export default () => {
  startGame(description, generateRound);
};
