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
    rock.style.backgroundColor = 'red';
    rock.style.color = "white";
    playRound(humanSelection, computerChoice);
    
}

function choosePaper() {
    let humanSelection = "Paper";
    let computerChoice = getComputerChoice();
    paper.style.backgroundColor = 'red';
    paper.style.color = "white";
    playRound(humanSelection, computerChoice);
}

function chooseScissors() {
    let humanSelection = "Scissors";
    let computerChoice = getComputerChoice();
    scissors.style.backgroundColor = 'red';
    scissors.style.color = "white";
    playRound(humanSelection, computerChoice);
}

function playRound(humanSelection, computerChoice) {
    // rock beats scissors
    // scissors beats paper
    // paper beats rock

    console.log(`Your choice: ${humanSelection}`);
    console.log(`The Computer's choice: ${computerChoice}`);

    if (humanSelection == 'Rock') {
        if (computerChoice == 'Rock') {
            console.log("Rock and Rock. No points!")
        }
        else if (computerChoice == 'Paper') {
            computerScore++;
            updateScore(humanScore, computerScore);
            console.log(computerScore);
            console.log("Paper beats Rock. One point for the computer!");
        }
        else if (computerChoice == 'Scissors') {
            humanScore++;
            updateScore(humanScore, computerScore);
            console.log(humanScore);
            console.log('Rock beats Scissors. One point for the human!');
        }
    }
    else if (humanSelection == 'Paper') {
        if (computerChoice == 'Rock') {
            humanScore++;
            updateScore(humanScore, computerScore);
            console.log(humanScore);
            console.log("Paper beats Rock. One point for the human!");
        }
        else if (computerChoice == 'Paper') {
            console.log("Paper and Paper. No points!");
        }
        else if (computerChoice == 'Scissors') {
            computerScore++;
            updateScore(humanScore, computerScore);
            console.log(computerScore);
            console.log('Scissors beats Paper. One point for the computer!');
        }

    }
    else if (humanSelection == 'Scissors') {
        if (computerChoice == 'Rock') {
            computerScore++;
            updateScore(humanScore, computerScore);
            console.log(computerScore)
            console.log("Rock beats Scissors. One point for the computer!");
        }
        else if (computerChoice == 'Paper') {
            humanScore++;
            updateScore(humanScore, computerScore);
            console.log(humanScore)
            console.log("Scissors beats Paper. One point for the human!");
        }
        else if (computerChoice == 'Scissors') {
            console.log("Scissors and Scissors. No points!");
        }
    }
    if (humanScore < 5 && computerScore < 5) {
        rock.onclick = chooseRock;
        paper.onclick = choosePaper;
        scissors.onclick = chooseScissors;
    }
    else if (humanScore === 5) {
        console.log(`Computer Score: ${computerScore}\n Human Score: ${humanScore}\nYou win!`);
        humanScore = 0;
        computerScore = 0;
        updateScore(humanScore, computerScore);
    } else if (computerScore === 5) {
        console.log(`Computer Score: ${computerScore}\n Human Score: ${humanScore}\nThe computer wins!`);
        humanScore = 0;
        computerScore = 0;
        updateScore(humanScore, computerScore);
    }
}


