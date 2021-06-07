import getRandomInt from '../utils.js';
import game from '../index.js';

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
      return 0;
  }
};

const generateRound = () => {
  const a = getRandomInt(0, 100);
  const b = getRandomInt(0, 100);
  const indexOperator = operators[getRandomInt(0, operators.length - 1)];
  const result = String(calculate(a, b, indexOperator));
  const question = `${a} ${indexOperator} ${b}`;
  return [question, result];
};

export default () => {
  game(description, generateRound);
};
