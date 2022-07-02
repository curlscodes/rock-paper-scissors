
// DOM Elements
const pScoreEl = document.getElementById('pScore') 
const cScoreEl = document.getElementById('cScore') 
const winnerEl = document.getElementById('winner') 
const winloseEl = document.getElementById('winlose')
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
            winloseEl.innerText = `You lose. ${computerMove} beats ${playerMove}!`}

        if (computerMove === 'rock' && playerMove === 'paper'
        || computerMove === 'scissors' && playerMove === 'rock' 
        || computerMove === 'paper' && playerMove === 'scissors') 
            {pCounter++;
            winloseEl.innerText = `You win. ${playerMove} beats ${computerMove}!`}

        else if (computerMove === playerMove) {
            winloseEl.innerText = `Draw. You both chose ${playerMove}!`;}
        
    if (pCounter == 5) {
        winnerEl.innerText = "You won!";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    } else if (cCounter == 5) {
        winnerEl.innerText = "You lost!";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
    pScoreEl.innerText = `Player: ${pCounter}`
    cScoreEl.innerText = `Computer: ${cCounter}`
    round++;
    roundEl.innerText = `Round: ${round}`;
}

let cCounter = 0
let pCounter = 0
let round = 0

let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');
rockBtn.addEventListener('click', () => game('rock', computerPlay()));
paperBtn.addEventListener('click', () => game('paper', computerPlay()));
scissorsBtn.addEventListener('click', () => game('scissors', computerPlay()));



