
const choices = ['Rock', 'Paper', 'Scissors'];
let computerScore = 0;
let playerScore = 0;


function getComputerChoice(){
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(playerSelection, computerSelection){
    const capitalizeSelection  = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if(capitalizeSelection == computerSelection){
        computerScore += 0.5;
        playerScore += 0.5;
        return("It's a Draw!");
    }else if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock"||playerSelection == "Scissors" && computerSelection == "Paper" ){
        playerScore += 1;
        return("Congrats, you win!");
    }else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock"){
        computerScore += 1;
        return("You lose!");
    }else{
        return("You input the wrong value, I'll give you 0");
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("What's your choice?");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log("The final score is: Player - " + playerScore + " | " + "Computer - " + computerScore);
}


game();
