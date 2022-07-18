function computerPlay(){
    let compChoice = Math.floor(Math.random() * 3);
    switch (compChoice){
        case 0:
            return "rock";
            break;
        case 1: 
            return "paper";
            break;
        case 2: 
            return "scissors";
            break;
    }
}

function playRPS(playSelection, computerSelection){
    let player = playSelection.toLowerCase();
    switch (player){
        case ("rock"):
            if (computerSelection === "scissors"){
                playerScore++;
                return "You win! Rock beats Scissors";
            } else if (computerSelection === "paper"){
                computerScore++;
                return "You Lose! Paper beats Rock";
            } else {
                return "Tie! Rock does nothing to Rock"
            }
            break;
        case ("paper"):
            if (computerSelection === "rock"){
                playerScore++;
                return "You Win! Paper beats Rock";
            } else if (computerSelection === "scissors"){
                computerScore++;
                return "You Lose! Scissors beats Paper";
            } else {
                return "Tie! Paper does nothing to Paper"
            }
            break;
        case("scissors"):
            if (computerSelection === "paper"){
                playerScore++;
                return "You Win! Scissors beats Paper";
            } else if (computerSelection === "rock"){
                computerScore++;
                return "You Lose! Rock beats Scissors";
            } else {
                return "Tie! Scissors does nothing to Scissors"
            }
            break;
        default:
            return "Invalid input. Please choose between rock, paper, or scissors."
            break;
    }
}

function updateScore(){
    const playerScore = document.querySelector('#playerScore');
    const computerScore = document.querySelector('#computerScore');
    playerScore.textContent = `Your Score: ${playerScore}`;
    computerScore.textContent = `Computer Score:  ${computerScore}`;
}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const results = document.querySelector('#results');
let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener('click', () => {
    let outcome = document.createElement('p');
    outcome.textContent = playRPS('rock', computerPlay());
    results.appendChild(outcome);
    updateScore();
});

paperButton.addEventListener('click', () => {
    let outcome = document.createElement('p');
    outcome.textContent = playRPS('paper', computerPlay());
    results.appendChild(outcome);
    updateScore();
});

scissorsButton.addEventListener('click', () => {
    let outcome = document.createElement('p');
    outcome.textContent = playRPS('scissors', computerPlay());
    results.appendChild(outcome);
    updateScore();
});

