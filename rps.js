function computerPlay(){
    let compChoice = Math.floor(Math.random() * 3);
    switch (compChoice){
        case 0:
            return "Rock";
            break;
        case 1: 
            return "Paper";
            break;
        case 2: 
            return "Scissors";
            break;
    }
}

function playRPS(playSelection, computerSelection){
    
}

console.log(computerPlay());