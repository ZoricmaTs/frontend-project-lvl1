import readlineSync from 'readline-sync';

const countRounds = 3;

export default (gameDescription, getData) => {
  const userName = readlineSync.question('May I have your name? ');

  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);
  let correctAnswersCount = 0;
  let count = 0;
  while (countRounds > count) {
    const [questionValue, correctValue] = getData();
    console.log(`Question: ${questionValue}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const answerIsCorrect = 'Correct!';

    if (userAnswer === correctValue) {
      console.log(answerIsCorrect);
      count += 1;
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctValue}'.\nLet's try again, ${userName}!`);
      count += 3;
    }
  }

  if (correctAnswersCount === countRounds) {
    console.log(`Congratulations, ${userName}!`);
  }
};
