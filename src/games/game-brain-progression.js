import getRandomInt from '../random-num.js';
import game from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const progression = (firstNum, d, count, hiddenItem) => {
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
    item += d;
  }

  return [array, hiddenValue];
};

const createBrainProgression = () => {
  const firstNum = getRandomInt(-100, 100);
  const d = getRandomInt(0, 5);
  const count = getRandomInt(5, 10);
  const hiddenItem = getRandomInt(0, count);
  const [array, hiddenValue] = progression(firstNum, d, count, hiddenItem);
  const result = String(hiddenValue);
  const question = array.join(' ');
  return [question, result];
};

export default () => {
  game(gameDescription, createBrainProgression);
};
