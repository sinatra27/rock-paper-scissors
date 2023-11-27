// Function that accepts an array and returns a random option from the array
function getComputerChoice (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function that accepts two parameters, selections for the player and computer
function playRound (playerSelection, computerSelection) {
    // Conditionals for various selections, compare with computer's selection, then return result of game
    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        return 'You did not enter a valid selection';
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You Lose! Paper beats Rock';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You Win! Rock beats Scissors';
    }
    else if  (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You Win! Paper beats Rock';
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You Lose! Scissors beats Paper';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You Lose! Rock beats Scissors';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You Win! Scissors beats Paper';
    }
    else return 'Tie!! Same selection';
}

// const playerSelection = 'rock';

// Prompt the player to type in their selection, make input case-insensitive by convert to all lower case
const playerSelection = prompt('Player 1, please select Rock, Paper, or Scissors...').toLowerCase();

// Create an array that includes three options for the computer selection
const options = ['rock', 'paper', 'scissors'];


const computerSelection = getComputerChoice(options);
console.log(playRound(playerSelection, computerSelection));