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
                return "You win! Rock beats Scissors";
            } else if (computerSelection === "paper"){
                return "You Lose! Paper beats Rock";
            } else {
                return "Tie! Rock does nothing to Rock"
            }
            break;
        case ("paper"):
            if (computerSelection === "rock"){
                return "You Win! Paper beats Rock";
            } else if (computerSelection === "scissors"){
                return "You Lose! Scissors beats Paper";
            } else {
                return "Tie! Paper does nothing to Paper"
            }
            break;
        case("scissors"):
            if (computerSelection === "paper"){
                return "You Win! Scissors beats Paper";
            } else if (computerSelection === "rock"){
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

function game(){
    for (let i = 0; i < 5; i++){
        let playerInput = prompt("Choose between Rock, Paper, or Scissors")
        console.log(playRPS(playerInput, computerPlay()));
    }   
}

game();