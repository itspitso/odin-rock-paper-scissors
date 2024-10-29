function getComputerChoice() {
    // use Math.random to return either rock, paper or scissors
    // anything less than or equal to 0.33 is rock
    // greater than 0.33, less than or equal to 0.66 is paper
    // greater than 0.66, less than or equal to 0.99 is scissors
    number = Math.random();
    if (number <= 0.33) {
        return 'Rock';
    }
    else if (number > 0.33 && number <= 0.66) {
        return 'Paper';
    }
    else {
        return 'Scissors'
    }
}

const text = document.querySelector("#text");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let computerScore = 0;
let humanScore = 0;

const compScore = document.querySelector("#comp-score");
const humScore= document.querySelector("#human-score");

compScore.innerText = computerScore; 
humScore.innerText = humanScore; 

rock.onclick = chooseRock;
paper.onclick = choosePaper;
scissors.onclick = chooseScissors;

function updateScore(humanScore, computerScore) {
    compScore.innerText = computerScore; 
    humScore.innerText = humanScore;   
}

function chooseRock() {
    let humanSelection = "Rock";
    let computerChoice = getComputerChoice();
    playRound(humanSelection, computerChoice);
    
}

function choosePaper() {
    let humanSelection = "Paper";
    let computerChoice = getComputerChoice();
    playRound(humanSelection, computerChoice);

}

function chooseScissors() {
    let humanSelection = "Scissors";
    let computerChoice = getComputerChoice();
    playRound(humanSelection, computerChoice);
}

function playRound(humanSelection, computerChoice) {
    // rock beats scissors
    // scissors beats paper
    // paper beats rock
    text.innerText = `Your choice: ${humanSelection}\nThe Computer's choice: ${computerChoice}.`;
    //console.log(`Your choice: ${humanSelection}`);
    //console.log(`The Computer's choice: ${computerChoice}`);

    if (humanSelection == 'Rock') {
        if (computerChoice == 'Rock') {
            text.innerText += " Rock and Rock. No points!"
        }
        else if (computerChoice == 'Paper') {
            computerScore++;
            updateScore(humanScore, computerScore);
            text.innerText += " Paper beats Rock. One point for the computer!";
        }
        else if (computerChoice == 'Scissors') {
            humanScore++;
            updateScore(humanScore, computerScore);
            text.innerText += ' Rock beats Scissors. One point for the human!';
        }
    }
    else if (humanSelection == 'Paper') {
        if (computerChoice == 'Rock') {
            humanScore++;
            updateScore(humanScore, computerScore);
            text.innerText += " Paper beats Rock. One point for the human!";
        }
        else if (computerChoice == 'Paper') {
            text.innerText += " Paper and Paper. No points!";
        }
        else if (computerChoice == 'Scissors') {
            computerScore++;
            updateScore(humanScore, computerScore);
            text.innerText += ' Scissors beats Paper. One point for the computer!';
        }

    }
    else if (humanSelection == 'Scissors') {
        if (computerChoice == 'Rock') {
            computerScore++;
            updateScore(humanScore, computerScore);
            text.innerText += " Rock beats Scissors. One point for the computer!";
        }
        else if (computerChoice == 'Paper') {
            humanScore++;
            updateScore(humanScore, computerScore);
            text.innerText += " Scissors beats Paper. One point for the human!";
        }
        else if (computerChoice == 'Scissors') {
            text.innerText += " Scissors and Scissors. No points!";
        }
    }
    if (humanScore < 5 && computerScore < 5) {
        rock.onclick = chooseRock;
        paper.onclick = choosePaper;
        scissors.onclick = chooseScissors;
    }
    else if (humanScore === 5) {
        text.innerText = `Computer Score: ${computerScore}\nHuman Score: ${humanScore}\nYou win!\nWant to play again? Click Rock, Paper or Scissors to start!`;
        humanScore = 0;
        computerScore = 0;
        updateScore(humanScore, computerScore);
    } else if (computerScore === 5) {
        text.innerText = `Computer Score: ${computerScore}\nHuman Score: ${humanScore}\nThe computer wins!\nWant to play again? Click Rock, Paper or Scissors to start!`;
        humanScore = 0;
        computerScore = 0;
        updateScore(humanScore, computerScore);
    }
}


