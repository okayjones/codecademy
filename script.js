let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
};

function compareGuesses(userGuess, computerGuess, targetNumber) {
  if (userGuess >=0 && userGuess <=9) {
    const userDiff = getAbsoluteDistance(targetNumber, userGuess);
    const computerDiff = getAbsoluteDistance(targetNumber, computerGuess);
    return userDiff <= computerDiff ? true : false;    
  } else {
    alert('Guess must be between 0-9. Try again.');
  }
};

function getAbsoluteDistance(target, number) {
  return Math.abs(target-number);
};

function updateScore(winner) {
  winner === 'human' ? humanScore ++ : computerScore++;
};

function advanceRound() {
  currentRoundNumber++;
};