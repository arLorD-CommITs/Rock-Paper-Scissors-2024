/*
const btnRock = document.querySelector('btn-rock'); 
const btnPaper = document.querySelector('btn-paper');
const btnScissors = document.querySelector('btn-scissors');
*/

function getComputerChoice (computerSelection){
    computerSelection = Math.floor(Math.random() * 3)
    return computerSelection === 0 ? "rock" :
           computerSelection === 1 ? "paper" :
           "scissors";    
}

let playRound = (playerSelection, computerSelection) => {

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

