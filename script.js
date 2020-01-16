const result = document.createElement('p');
result.classList.add('result');

const score = document.createElement('p')
score.classList.add('score')

function computerPlay() {
  let compChoice = ["rock", "paper", "scissors"];
  var randComp = compChoice[Math.floor(Math.random() * compChoice.length)];
  return randComp;
}
var scorePlayer = 0;
var scoreComputer = 0;
function playRound(e) {
  let computerSelection = computerPlay();
  let playerSelection = e.target.id;
  if (playerSelection === computerSelection) {
    result.textContent = 'This is a tie';
    score.textContent = 'Your Score: '+ scorePlayer + ' Computer Score: '+ scoreComputer;
  } else if (
    playerSelection.toUpperCase() == "ROCK" &&
    computerSelection.toUpperCase() == "SCISSORS"
  ) {
    scorePlayer++;
    result.textContent = "You Win! Rock Beats Scissors.";
    score.textContent = 'Your Score: '+ scorePlayer + ' Computer Score: '+ scoreComputer;
  } else if (
    playerSelection.toUpperCase() == "ROCK" &&
    computerSelection.toUpperCase() == "PAPER"
  ) {
    scoreComputer++;
    result.textContent = 'Computer Wins! Paper Beats Rock';
    score.textContent = 'Your Score: '+ scorePlayer + ' Computer Score: '+ scoreComputer;
  } else if (
    playerSelection.toUpperCase() == "SCISSORS" &&
    computerSelection.toUpperCase() == "PAPER"
  ) {
    scorePlayer++;
    result.textContent = "You Win! Scissors Beats Paper.";
    score.textContent = 'Your Score: '+ scorePlayer + ' Computer Score: '+ scoreComputer;
  } else if (
    playerSelection.toUpperCase() == "SCISSORS" &&
    computerSelection.toUpperCase() == "ROCK"
  ) {
    scoreComputer++;
    result.textContent = "Computer Wins! Rock Beats Scissors";
    score.textContent = 'Your Score: '+ scorePlayer + ' Computer Score: '+ scoreComputer;
  } else if (
    playerSelection.toUpperCase() == "PAPER" &&
    computerSelection.toUpperCase() == "ROCK"
  ) {
    scorePlayer++;
    result.textContent = "You Win! Paper Beats Rock.";
    score.textContent = 'Your Score: '+ scorePlayer + ' Computer Score: '+ scoreComputer;
  } else if (
    playerSelection.toUpperCase() == "PAPER" &&
    computerSelection.toUpperCase() == "SCISSORS"
  ) {
    scoreComputer++;
    result.textContent = "Computer Wins! Scissors Beats Paper";
    score.textContent = 'Your Score: '+ scorePlayer + ' Computer Score: '+ scoreComputer;
  }
  if(scorePlayer == 5){
    score.textContent = 'Congratulations!';
    result.textContent='You were the First to Five!';
    scorePlayer = 0;
    scoreComputer = 0;
  }else if (scoreComputer ==5){
    score.textContent = 'Sorry';
    result.textContent='The Computer was the First to Five';
     scorePlayer = 0;
    scoreComputer = 0;
  }
}


const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", playRound);
});

buttoncontainer.append(result);
buttoncontainer.append(score);