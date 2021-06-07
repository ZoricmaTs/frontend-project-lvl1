import readlineSync from 'readline-sync';

const rounds = 3;

export default (gameDescription, getData) => {
  const nameQuestion = readlineSync.question('May I have your name? ');
  const user = nameQuestion;
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${user}!`);
  console.log(gameDescription);
  let correctAnswersCount = 0;
  let count = 0;
  while (rounds > count) {
    const [questionValue, correctValueValue] = getData();
    const question = questionValue;
    const correctValue = correctValueValue;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const answerIsCorrect = 'Correct!';

    if (userAnswer === correctValue) {
      console.log(answerIsCorrect);
      count += 1;
      correctAnswersCount += 1;
    } else {
      const answerIsIncorrect = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctValue}'.\nLet's try again, ${user}!`;
      console.log(answerIsIncorrect);
      count += 3;
    }

    if (correctAnswersCount === rounds) {
      console.log(`Congratulations, ${user}!`);
    }
  }
};
