import readlineSync from "readline-sync";
import { car, cdr } from '@hexlet/pairs';

const round = 3;

const userName = () => {
  const nameQuestion = readlineSync.question('May I have your name? ');
  return nameQuestion;
};

const user = userName();

const userAnswer = () => {
  const userResp = readlineSync.question('Your answer: ');
  return userResp;
};


export default (gameDescription, getData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${user}!`);
  console.log(gameDescription);
  let correctAnswersCount = 0;
  let count = 0;
  while (round > count) {
    const data = getData();
    const question = car(data);
    const correctValue = cdr(data);
    console.log('question', question, correctValue);
    console.log(`Question: ${question}`);
    const UserAnswer = userAnswer();
    const answerIsCorrect = 'Correct!';

    if (UserAnswer === correctValue) {
      console.log(answerIsCorrect);
      count += 1;
      correctAnswersCount += 1;
    } else {
      const answerIsIncorrect = `'${UserAnswer}' is wrong answer ;(. Correct answer was '${correctValue}'.\nLet's try again, ${user}!`;
      console.log(answerIsIncorrect);
      count += 3;
    }

    if (correctAnswersCount === round) {
      console.log(`Congratulations, ${user}!`);
    }
  }
};