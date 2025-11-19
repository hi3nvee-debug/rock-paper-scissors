let humanScore = 0;
let computerScore = 0;
const rock = document.querySelector("#rock")
const scissors = document.getElementById("scissors")
const paper = document.getElementById("paper")

const scoreCount = document.querySelector("#scorekeep")
const addLine = document.createElement("p")

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

function getPlayerChoice(playerChoice){
    let lowerCaseChoice = playerChoice.toLowerCase();

return lowerCaseChoice;
}

function playRound (humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        alert("Tie!");
        
    } else if ((humanChoice === "rock" && computerChoice === "scissors") 
                || (humanChoice === "scissors" && computerChoice === "paper")
                || (humanChoice === "paper" && computerChoice === "rock")){
        
            humanScore += 1;

    } else if ((humanChoice === "rock" && computerChoice === "paper")
                || (humanChoice === "scissors" && computerChoice === "rock")
                || (humanChoice === "paper" && computerChoice === "scissors")){
    
        computerScore += 1;

    } 
    
    const winner = document.createElement("p")

    if(humanScore === 5){
        winner.textContent = "You win!";
        scoreCount.appendChild(winner);
    } else if (computerScore === 5){
        winner.textContent = "Computer wins!";
        scoreCount.appendChild(winner);
    }

}

rock.addEventListener('click', (e)=> {
    const playerChoice = getPlayerChoice(e.target.innerText);
    playRound(playerChoice, getComputerChoice());
    addLine.textContent = "Player score: " + humanScore + " ; Computer score: " + computerScore;
    scoreCount.appendChild(addLine); 
    
});

paper.addEventListener('click', (e)=> {
    const playerChoice = getPlayerChoice(e.target.innerText);
    playRound(playerChoice, getComputerChoice());
    addLine.textContent = "Player score: " + humanScore + " ; Computer score: " + computerScore;
    scoreCount.appendChild(addLine); 

});

scissors.addEventListener('click', (e)=> {
    const playerChoice = getPlayerChoice(e.target.innerText);
    playRound(playerChoice, getComputerChoice());
    addLine.textContent = "Player score: " + humanScore + " ; Computer score: " + computerScore;
    scoreCount.appendChild(addLine); 

});
