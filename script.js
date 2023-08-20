const buttons = document.querySelectorAll('button');
const score = document.querySelector('.score');
const msg = document.querySelector('.message');
const restart = document.querySelector('.restart')
const choices = ['Rock', 'Paper', 'Scissors'];
let computerScore = 0;
let playerScore = 0;


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.className;
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    })
});

function getComputerChoice(){
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(playerSelection, computerSelection){
    const capitalizeSelection  = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if(playerScore < 5 && computerScore < 5){
        if(capitalizeSelection == computerSelection){
            computerScore += 0.5;
            playerScore += 0.5;
            score.textContent = `It's a draw, the score is now ${playerScore}(You) vs '${computerScore}'(Computer)`;
        }else if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock"||playerSelection == "Scissors" && computerSelection == "Paper" ){
            playerScore += 1;
            score.textContent = `You win this round! ${playerScore}(You) vs '${computerScore}'(Computer)`;
        }else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock"){
            computerScore += 1;
            score.textContent = `You lose this round, the score is now ${playerScore}(You) vs '${computerScore}'(Computer)`;
        }
    }
    else{
        if(playerScore > computerScore){
            msg.textContent = "You have won this game!";
            msg.style.color = '#03fc6b';
            console.log(msg.textContent);
            score.textContent = `Final score is ${playerScore} (You) vs ${computerScore} (Computer)`
        }
        else if(playerScore == 5 && computerScore == 5){
            msg.textContent = "It's a draw!";
            console.log(msg.textContent);
            msg.style.color = 'skyblue';
            score.textContent = `Final score is ${playerScore} (You) vs ${computerScore} (Computer)`
        }
        else{   
            msg.textContent = "You have lost this game!";
            console.log(msg.textContent);
            msg.style.color = 'red';
            score.textContent = `Final score is ${playerScore} (You) vs ${computerScore} (Computer)`
        }
        resetGame();
    }
}

function resetGame(){
    buttons.forEach((button) =>{
        button.disabled = true;
    })
    restart.disabled = false;
    computerScore = 0;
    playerScore = 0;
}

restart.addEventListener('click', () => buttons.forEach((button) =>{
    button.disabled = false;
    restart.disabled = true;
    msg.textContent = "";
    score.textContent = "";
}))