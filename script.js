
// DOM Elements
const pScoreEl = document.getElementById('pScore') 
const cScoreEl = document.getElementById('cScore') 
const winnerEl = document.getElementById('winner') 
const roundEl = document.getElementById('round')

function computerPlay() {
    let moves = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * moves.length);
    return moves[random];
}

function game(playerMove, computerMove) { 

    if (pCounter < 5 && cCounter < 5) 

        if (computerMove === 'paper' && playerMove === 'rock'  
        || computerMove === 'rock' && playerMove === 'scissors'
        || computerMove === 'scissors' && playerMove === 'paper') 
            {cCounter++;
            roundEl.innerText = `You lose. ${computerMove} beats ${playerMove}!`}

        if (computerMove === 'rock' && playerMove === 'paper'
        || computerMove === 'scissors' && playerMove === 'rock' 
        || computerMove === 'paper' && playerMove === 'scissors') 
            {pCounter++;
            roundEl.innerText = `You win. ${playerMove} beats ${computerMove}!`}

        else if (computerMove === playerMove) {
            roundEl.innerText = `Draw. You both chose ${playerMove}!`;}
        
    else if (pCounter == 5) {
        winnerEl.innerText = "You won!"
    } else if (cCounter == 5) {
        winnerEl.innerText = "You lost!"
    }
    pScoreEl.innerText = `Player:${pCounter}`
    cScoreEl.innerText = `Computer:${cCounter}`

}

let cCounter = 0
let pCounter = 0

let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');
rockBtn.addEventListener('click', () => game('rock', computerPlay()));
paperBtn.addEventListener('click', () => game('paper', computerPlay()));
scissorsBtn.addEventListener('click', () => game('scissors', computerPlay()));



