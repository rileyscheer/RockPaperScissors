const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const roundResults = document.querySelector('.results');
const score = document.querySelector('.scoreboard')
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let playerSelection = '';

function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
}

function playRound(computerSelection){
    computerPlay();
    computerSelection = computerChoice;
    if (computerSelection === playerSelection) {
        roundResults.textContent = 'Tie!!!';
        score.textContent = `Player: ${playerScore}   Computer: ${computerScore}`;

    }   else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore += 1;
        roundResults.textContent = 'The computer wins! Rock beats Scissors.';
        score.textContent = `Player: ${playerScore}   Computer: ${computerScore}`;

    }   else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore += 1;
        roundResults.textContent = 'The computer wins! Paper beats Rock.';
        score.textContent = `Player: ${playerScore}   Computer: ${computerScore}`;

    }   else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore += 1;
        roundResults.textContent = 'The computer wins! Scissors beats Paper.';
        score.textContent = `Player: ${playerScore}   Computer: ${computerScore}`;

    }   else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore += 1;
        roundResults.textContent = 'You win! Scissors beats Paper.';
        score.textContent = `Player: ${playerScore}   Computer: ${computerScore}`;

    }   else if (computerSelection === "scissors" && playerSelection === "rock") {
        playerScore += 1;
        roundResults.textContent = 'You win! Rock beats Scissors.';
        score.textContent = `Player: ${playerScore}   Computer: ${computerScore}`;
        
    }   else if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore += 1;
        roundResults.textContent = 'You win! Paper beats Rock.';
        score.textContent = `Player: ${playerScore}   Computer: ${computerScore}`;
    }
}

rockButton.addEventListener('click', function(){
    playerSelection = 'rock';
    playRound();
});
paperButton.addEventListener('click', function(){
    playerSelection = 'paper';
    playRound();
});
scissorsButton.addEventListener('click', function(){
    playerSelection = 'scissors';
    playRound();
});


// function game() {
//     for (let i = 1; i <= 5; i++) {
//         playRound();
//     }
//     if (playerScore === computerScore) {
//         roundResults.textContent = "Tiebreaker!";
//         playRound();
//     }
//     if (playerScore > computerScore) {
//         roundResults.textContent = `You won the match! Player Score: ${playerScore}   Computer Score: ${computerScore}`;
//     }   else {
//         roundResults.textContent = `You lost the match! Player Score: ${playerScore}   Computer Score: ${computerScore}`;
//     }
// }