import getRandomInt from '../utils.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (first, diff, count) => {
  const arr = [first];

  for (let i = 1; i < count; i += 1) {
    arr.push(first + (diff * i));
  }

  return arr;
};

const generateRound = () => {
  const first = getRandomInt(0, 50);
  const diff = getRandomInt(1, 5);
  const count = getRandomInt(5, 10);

  const progression = getProgression(first, diff, count);

  const hiddenIndex = getRandomInt(0, count - 1);
  const hiddenValue = progression[hiddenIndex];
  const result = String(hiddenValue);

  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, result];
};

export default () => {
  startGame(description, generateRound);
};
