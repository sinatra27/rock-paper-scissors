// Function to randomly select an option from array to use as Computer's selection
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

// Function that accepts two parameters, selections for the player and computer
function playRound(playerSelection, computerSelection) {
    // Conditionals for various selections, compare with computer's selection, then return result of game
    // Increment number of wins by player and computer
    if (playerSelection == computerSelection) return `Tie!! You both selected ${playerSelection}`;
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'paper' && computerSelection == 'rock') || 
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
        player++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        cpu++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// Function that accepts a number and loops it
function playGame(playerSelection) {
    // Use to determine if game already over
    if (round == 999) {
        results.textContent = '';
        score.textContent = '';
        final.textContent = 'Game over! Please reload page to play again!!';
        return;
    }
    const computerSelection = getComputerChoice();
    results.textContent = playRound(playerSelection, computerSelection);

    // Print the score after every round
    score.textContent = `Round ${round}: Player Score = ${player} / Computer Score = ${cpu}`;
    round++;
    // Use conditional If to continue playing game until one player reaches five points
    if (player < 5 && cpu < 5) return;
    else {
        round = 999;                        // Set for end of game
        // Use conditional If to print the final results of the game
        if (player > cpu) final.textContent = 'Game over! You have won the game!!';
        else final.textContent = 'Game over! You have lost the game :(';
    }
}

// Initialize variables to track the rounds and number of wins by player and computer
let round = 1;
let player = 0; 
let cpu = 0;

// Initialize variables to append text results
const container = document.querySelector('#container');

const results = document.createElement('div');
container.appendChild(results);
results.textContent = 'First player to score five points, wins!'

const score = document.createElement('div');
container.appendChild(score);

const final = document.createElement('div');
container.appendChild(final);

// Add event listener on click for each of the three player options
const buttons = document.querySelectorAll('button');
for (let btn of buttons) {
    btn.addEventListener('click', () => playGame(btn.value));
}
