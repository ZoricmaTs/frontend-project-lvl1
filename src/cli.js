import readlineSync from 'readline-sync';

const userName = () => {
  const nameQuestion = readlineSync.question('May I have your name? ');
  return nameQuestion;
};

export default userName;
