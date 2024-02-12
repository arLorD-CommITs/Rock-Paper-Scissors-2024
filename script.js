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

let computerSelection;

function getComputerChoice (computerSelection){
    computerSelection = Math.floor(Math.random() * 3)
    return computerSelection === 0 ? "Rock" :
           computerSelection === 1 ? "Paper" :
           "Scissors"; 
    
}

