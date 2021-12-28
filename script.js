//JavaScript
let gameActive = true
let playerScore = 0;
let computerScore = 0;
let janKenPon = ['rock', 'paper', 'scissors'];
let victoryOrLoss = ['tie', 'victory', 'loss'];

const buttons = document.querySelectorAll('button')
const playerScoreboard = document.getElementById('#playerScoreboard')
const computerScoreboard = document.getElementById('#computerScoreboard')
const roundHeader = document.querySelector('roundHeader')

//randomly returns rock, paper, or scissors
function computerPlay() { 
    //randomly selects between 0-2, and rounded up to a whole number
    let computerResult = Math.floor(Math.random()*3);

    //returns rock, paper, or scissors based on the randomized result
    return janKenPon[computerResult];
}

//returns rock, paper, or scissors based on where the player clicked
function userPlay(id) {
    value = janKenPon[id]
    console.log(value)
    game(value, computerPlay())
    return value
}

//asks the player to input rock, paper, or scissors
/*
function userPlay() {
    const playerInput = prompt(`The score is Player: ${playerScore} vs Computer: ${computerScore}. Input Rock, Paper, or Scissors`)
    //converts users inputted string to lower case to match janKen array
    const convertedInput = playerInput.toLowerCase()
    return convertedInput
}
*/

//calculates victory or loss
function playRound(playerSelection, computerSelection) {
    //if tie, return tie
    if (playerSelection === computerSelection) {
        return victoryOrLoss[0];
    }
    
    //if player wins, return victory,
    else if (playerSelection === janKenPon[0] && computerSelection === janKenPon[2] || playerSelection === janKenPon[1] && computerSelection === janKenPon[0] || playerSelection === janKenPon[2] && computerSelection === janKenPon[1]) {
        playerScore++
        return victoryOrLoss[1];
    }

    //if computer wins, return loss
    else if (playerSelection === janKenPon[0] && computerSelection === janKenPon[1] || playerSelection === janKenPon[1] && computerSelection === janKenPon[2] || playerSelection === janKenPon[2] && computerSelection === janKenPon[0]) {
        computerScore++
        return victoryOrLoss[2];
    }
}

function game(playerSelection) {
    //randomizes computer selection from computerPlay()
    const computerSelection = computerPlay();
    console.log(`The computer selected: ${computerSelection}`)

    //inputs player and computer selection to function to determine winner
    let result = playRound(playerSelection, computerSelection);
    console.log(`The result of this round is: ${result}`)

    playerScoreboard.textContent = `Player: ${playerScore}`
    computerScoreboard.textContent = `Computer: ${computerScore}`

    if (playerScore >= 5 || computerScore >= 5) {
        gameActive = false;
        console.log("The game is over")
    }
}

//.forEach method runs through each button of the array
buttons.forEach((button) => {
    //and an eventListener is added to each button which will trigger the userPlay function
    button.addEventListener('click', () => {
      userPlay(button.id);
    })
})