
// DOM Elements
const pScoreEl = document.getElementById('pScore') 
const cScoreEl = document.getElementById('cScore')
const dScoreEl = document.getElementById('dScore') 
const winnerEl = document.getElementById('winner') 
const winloseEl = document.getElementById('winlose')
const roundEl = document.getElementById('round')
const playerPlayAnnounce = document.getElementById('pPlay')
const computerPlayAnnounce = document.getElementById('cPlay')

function computerPlay() {
    let moves = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * moves.length);
    return moves[random];
}

function disableBtn() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    let refreshButton = document.createElement('button');
    let appenderEl = document.getElementById('winner');
    refreshButton.textContent = 'Play again?';
    appenderEl.appendChild(refreshButton);
    refreshButton.addEventListener('click', () => {
        window.location = window.location;
    })
}

function game(playerMove, computerMove) { 

    function updateSides() {
        playerPlayAnnounce.innerText = `Player chose ${playerMove}!`
        computerPlayAnnounce.innerText = `Computer chose ${computerMove}!`
    }

    if (pCounter < 5 && cCounter < 5) 

        if (computerMove === 'paper' && playerMove === 'rock'  
        || computerMove === 'rock' && playerMove === 'scissors'
        || computerMove === 'scissors' && playerMove === 'paper') 
            {cCounter++;
            winloseEl.innerText = `You lose. ${computerMove} beats ${playerMove}!`
            updateSides();
}
            
        if (computerMove === 'rock' && playerMove === 'paper'
        || computerMove === 'scissors' && playerMove === 'rock' 
        || computerMove === 'paper' && playerMove === 'scissors') 
            {pCounter++;
            winloseEl.innerText = `You win. ${playerMove} beats ${computerMove}!`
            updateSides();
}

        else if (computerMove === playerMove) {
            dCounter++;
            winloseEl.innerText = `Draw. You both chose ${playerMove}!`;
            updateSides();
}
        
    if (pCounter == 5) {
        winnerEl.innerText = "You won!";
        disableBtn()
    } else if (cCounter == 5) {
        winnerEl.innerText = "You lost!";
        disableBtn()
    }
    pScoreEl.innerText = `Player: ${pCounter}`
    dScoreEl.innerText = `Draws: ${dCounter}`
    cScoreEl.innerText = `Computer: ${cCounter}`
    round++;
    roundEl.innerText = `Round: ${round}`;
}

let cCounter = 0
let dCounter = 0
let pCounter = 0
let round = 0

let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');
rockBtn.addEventListener('click', () => game('rock', computerPlay()));
paperBtn.addEventListener('click', () => game('paper', computerPlay()));
scissorsBtn.addEventListener('click', () => game('scissors', computerPlay()));



