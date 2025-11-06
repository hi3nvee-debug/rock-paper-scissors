let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const number = Math.floor((Math.random() * 100) + 1);
    let choice = ""; 

    if (number >= 0 && number <= 33){
        choice = "rock";
    } else if (number > 33 && number <= 66){
        choice = "scissors";
    } else {
        choice = "paper";
    }

return choice;
}

function getPlayerChoice(){
    let playerChoice = prompt("Pick either: Rock, Paper, or Scissors");
    let lowerCaseChoice = playerChoice.toLowerCase();

return lowerCaseChoice;
}

function playRound (humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win!");
        humanScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose!");
        computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win!");
        humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose!");
        computerScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win!");
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose!");
        computerScore += 1;
    }

    return "";
}

function playGame (){
    for (i = 0; i < 5; i++){
        playRound(getPlayerChoice(), getComputerChoice());
    }
    console.log("Your score: " + humanScore + ", Computer score: " + computerScore);
} 

playGame();