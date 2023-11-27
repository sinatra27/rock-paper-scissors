// Function that accepts an array and returns a random option from the array
function getComputerChoice (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function that accepts two parameters, selections for the player and computer
function playRound (playerSelection, computerSelection) {
    // Conditionals for various selections, compare with computer's selection, then return result of game
    // Increment number of wins by player and computer
    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        return 'You did not enter a valid selection';
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper') {
        cpu++;
        return 'You Lose! Paper beats Rock';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        player++;
        return 'You Win! Rock beats Scissors';
    }
    else if  (playerSelection == 'paper' && computerSelection == 'rock') {
        player++;
        return 'You Win! Paper beats Rock';
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        cpu++;
        return 'You Lose! Scissors beats Paper';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        cpu++;
        return 'You Lose! Rock beats Scissors';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        player++;
        return 'You Win! Scissors beats Paper';
    }
    else return 'Tie!! Same selection';
}

// Function that accepts a number and loops it
function game(rounds) {
    // Use For loop to iterate the number of rounds to play
    for (let i = 1; i <= rounds; i++) {
        // Prompt player to type in their selection; make user input case-insensitive by converting to all lower case
        const playerSelection = prompt('Player 1, please select Rock, Paper, or Scissors...').toLowerCase();
        const computerSelection = getComputerChoice(options);
        console.log(playRound(playerSelection, computerSelection));
        // Print the score after every round
        console.log(`Round ${i}: Player Score = ${player} / Computer Score = ${cpu}`);
    }
    // Use conditional If to print the final results of the game
    if (player > cpu) console.log('Final Results: You have won the game!!');
    else if (cpu > player) console.log('Final Results: You have lost the game :(');
    else console.log('Final Results: Tie game...');
}

// Initialize variables to track number of wins by player and computer
let player = 0; 
let cpu = 0;

// Create an array that includes three options for the computer selection
const options = ['rock', 'paper', 'scissors'];

game(5);