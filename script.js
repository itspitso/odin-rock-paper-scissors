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
//console.log(getComputerChoice());

function getHumanChoice() {
    // Ask user to choose between rock paper scissors
    // Make it easy to choose by asking them to type number
    // 0 for rock, 1 for paper, 2 for scissors
    // Show error message if user inputs anything else
    let choice = prompt('Rock, Paper, Scissors? Please type your answer');
    return choice;
}
//console.log(getHumanChoice());

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    // rock beats scissors
    // scissors beats paper
    // paper beats rock 

    if (humanChoice == 'rock') {
        if (computerChoice == 'Rock') {
            return "Rock and Rock. It's a tie!"
        }
        else if (computerChoice == 'Paper') {
            computerScore++;
            return "Paper beats Rock. You lose!"
        }
        else if (computerChoice == 'Scissors') {
            humanScore++;
            return 'Rock beats Scissors. You win!'
        }
    }
    else if (humanChoice == 'paper') {
        if (computerChoice == 'Rock') {
            humanScore++;
            return "Paper beats Rock. You win!"
        }
        else if (computerChoice == 'Paper') {
            return "Paper and Paper. It's a tie!"
        }
        else if (computerChoice == 'Scissors') {
            computerScore++;
            return 'Scissors beats Paper. You lose!'
        }

    }
    else if (humanChoice == 'scissors') {
        if (computerChoice == 'Rock') {
            computerScore++;
            return "Rock beats Scissors. You lose!"
        }
        else if (computerChoice == 'Paper') {
            humanScore++;
            return "Scissors beats Paper. You win!"
        }
        else if (computerChoice == 'Scissors') {
            return "Scissors and Scissors. It's a tie!"
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));