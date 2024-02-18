let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const resultContainer = document.querySelector('.round-result-container');
const paraRoundResult = document.createElement('p');
const scoreContainer = document.querySelector('.score-container');

const hTwoScore = document.querySelector('.h2-score');
const scoreList = document.querySelector('.score')

let roundResultString = "";

buttons.forEach(function(button) {
    button.addEventListener('click', function(){
       resultContainer.appendChild(paraRoundResult);
       paraRoundResult.textContent = playRound(this.value, getComputerChoice());

       roundResultString = paraRoundResult.textContent;
       getScore(roundResultString);

       if (playerScore === 5) {
         let playerWon = confirm('You just reached a score of 5 and won the game! Congrats! Would you like to play again?');
         playerWon ? resetGame() : window.close();
       } else if (computerScore === 5) {
         let computerWon = confirm('Aww, the computer had just reached a score of 5. Try again?');
         computerWon ? resetGame() : window.close();
       }
       
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
    if (playerScore < 5 && computerScore < 5) {
        switch (string.substring(0, 5)) {
            case "You W":
                ++playerScore
                scoreList.firstChild.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
                break;
            case "You L":
                ++computerScore
                scoreList.firstChild.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
                break;
            default:
                playerScore += 0;
                computerScore += 0;
                scoreList.firstChild.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
                break;
        }
    }
}

function resetGame () {
    playerScore = 0;
    computerScore = 0;
    paraRoundResult.remove();
    scoreList.firstChild.textContent = "Player: Computer:"
}

