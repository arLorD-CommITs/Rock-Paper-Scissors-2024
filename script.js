/*
Pseudocode

*No GUI*
*Inputs are 'Rock' , 'Paper', and 'Scissors' which are obtained via prompt method.*

1. User provides inputs in the console log
2. Pass inputs to function getComputerChoice, with the parameters
    - playerSelection (case insensitive)
    - computerSelection
3. Process string to declare winner based on the values of playerSelection and computerSelection
*/

function getComputerChoice (computerSelection){
    computerSelection = Math.floor(Math.random() * 3)
    return computerSelection === 0 ? "rock" :
           computerSelection === 1 ? "paper" :
           "scissors";    
}

let playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();

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

let playGame = function () {
    let playerScore = 0;
    let computerScore = 0;

    for (i = 1; i <= 5; i++) {
        let playerSelection = prompt("Enter Rock, Paper, or Scissors");
        let roundText = playRound(playerSelection, getComputerChoice()); 

        roundText.substring(0, 5) === "You W" ? ++playerScore : 
        roundText.substring(0, 5) === "You L" ? ++computerScore : playerScore = playerScore;

        console.log(`Round ${i}: ${roundText}`);

    }

      if (playerScore > computerScore) {
        console.log(`You Win! Congrats! || Player score: ${playerScore} || Computer score: ${computerScore}`);
    } else if (playerScore == computerScore) {
        console.log(`It's a tie! || Player score: ${playerScore} || Computer score: ${computerScore}`);

    } else {
        console.log(`You Lose! || Player score: ${playerScore} || Computer score: ${computerScore}`);
        
        confirm("Try again?") ? playGame() :  console.log("Thanks for playing!");
    }


};

console.info("EYES HERE! Enter 'playGame();' to play.'");


//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, getComputerChoice()));
