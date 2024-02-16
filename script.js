
const buttons = document.querySelectorAll('button');
const resultContainer = document.querySelector('.round-result-container');
const paraRoundResult = document.createElement('p');
const scoreContainer = document.querySelector('.score-container');
const hTwoScore = document.querySelector('.h2-score');
let roundResultString = "";

buttons.forEach(function(button) {
    button.addEventListener('click', function(){
       resultContainer.appendChild(paraRoundResult);
       paraRoundResult.textContent = playRound(this.value, getComputerChoice());
       
       roundResultString = paraRoundResult.textContent;
       hTwoScore.textContent = " " + getScore(roundResultString); 
    });
});

function getComputerChoice (computerSelection){
    computerSelection = Math.floor(Math.random() * 3)
    return computerSelection === 0 ? "rock" :
           computerSelection === 1 ? "paper" :
           "scissors";    
};

function playRound (playerSelection, computerSelection, winner) {

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper!";
    } else {
        return "Invalid input! No scores added. Please enter either 'Rock', 'Paper', or 'Scissors'.";
    }
};

function getScore (string) {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        string.substring(0, 5) === "You W" ? ++playerScore :
        string.substring(0, 5) === "You L" ? ++computerScore : playerScore = playerScore;
    }

    if (playerScore > computerScore) {
        return `You Win! Congrats! || Player score: ${playerScore} || Computer score: ${computerScore}`;
    } else if (playerScore == computerScore) {
        return `It's a tie! || Player score: ${playerScore} || Computer score: ${computerScore}`;
    } else {
        return `You Lose! || Player score: ${playerScore} || Computer score: ${computerScore}`;
    }
}

