import readlineSync from 'readline-sync';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const userName = () => {
  const nameQuestion = readlineSync.question('May I have your name? ');
  return nameQuestion;
};
const user = userName();

const answerIsCorrect = 'Correct!';
const answerIsIncorrect = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${user}!`;
const isEven = (num) => num % 2 === 0;

const getRandomInt = () => {
  const maxNum = 400;
  return Math.floor(Math.random() * maxNum);
};

const question = () => {
  const userResp = readlineSync.question('Your answer: ');
  return userResp;
};

export default () => {
  console.log(`Hello, ${user}!`);
  console.log(gameDescription);
  const round = 3;
  let correctAnswersCount = 0;
  let count = 0;
  while (round > count) {
    const num = getRandomInt();
    const isEvenNum = isEven(num);

    console.log(`Question: ${num}`);
    const UserAnswer = question();

    if ((isEvenNum && UserAnswer === 'yes') || (!isEvenNum && UserAnswer === 'no')) {
      console.log(answerIsCorrect);
      count += 1;
      correctAnswersCount += 1;
    } else {
      console.log(answerIsIncorrect);
      count += 3;
    }

    if (correctAnswersCount === round) {
      console.log(`Congratulations, ${user}!`);
    }
  }
};
