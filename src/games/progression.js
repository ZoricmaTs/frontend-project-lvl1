import getRandomInt from '../utils.js';
import game from '../index.js';

const description = 'What number is missing in the progression?';

const progression = (firstNum, diff, count) => {
  const array = [ firstNum ];

  for (let i = 1; i < count; i += 1) {
    array.push(firstNum + (diff * i));
  }

  return array;
};

const generateRound = () => {
  const firstNum = getRandomInt(0, 50);
  const diff = getRandomInt(1, 5);
  const count = getRandomInt(5, 10);

  const array = progression(firstNum, diff, count);

  const hiddenIndex = getRandomInt(0, count - 1);
  const hiddenValue = array[hiddenIndex];
  const result = String(hiddenValue);

  array[hiddenIndex] = '..';
  const question = array.join(' ');

  return [question, result];
};

export default () => {
  game(description, generateRound);
};
