import getRandomInt from '../utils.js';
import game from '../index.js';

const description = 'What number is missing in the progression?';

const progression = (firstNum, diff, count, hiddenItem) => {
  const array = [];
  let item = firstNum;
  let hiddenValue = 0;

  for (let i = 0; i < count; i += 1) {
    if (i === hiddenItem) {
      hiddenValue = item;
      array.push('..');
    } else {
      array.push(item);
    }
    item += diff;
  }

  return [array, hiddenValue];
};

const generateRound = () => {
  const firstNum = getRandomInt(0, 50);
  const diff = getRandomInt(1, 5);
  const count = 10;
  const hiddenIndex = getRandomInt(0, count - 1);

  const [array, hiddenValue] = progression(firstNum, diff, count, hiddenIndex);
  const result = String(hiddenValue);
  const question = array.join(' ');

  return [question, result];
};

export default () => {
  game(description, generateRound);
};
