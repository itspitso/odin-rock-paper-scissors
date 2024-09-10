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
console.log(getComputerChoice());

function getHumanChoice() {
    prompt('Rock, Paper, Scissors? Type 0 for Rock, 1 for Paper or 2 for Scissors');
}
getHumanChoice();