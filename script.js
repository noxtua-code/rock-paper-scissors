const gameSelections = ['rock', 'paper', 'scissors'];
const playerSelectionButtons = document.querySelectorAll('button');
const roundResultsText = document.querySelector('.round-results');
const roundCountText = document.querySelector('.round-count');
let gameStillGoing = true;
let numOfRounds = 5;
let playerCount = 0;
let computerCount = 0;
let scoreToWin = 5;

playerSelectionButtons.forEach(element => {
    element.addEventListener('click', () => {
        if (gameStillGoing) {
            let playerSelection = element.id;
            let computerSelection = getComputerChoice();
            let result = playRound(computerSelection, playerSelection);
            declareResults(result);
        }
    });                   
});

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getComputerChoice() {  // randomly returns rock/paper/scissors
    let randomNumber = Math.floor(Math.random() * 3);
    return gameSelections[randomNumber];  
}  

function playRound(computerSelection, playerSelection) { //determines the result of the round 
    let result;
    
    switch(true) {
        case playerSelection === computerSelection:
            roundResultsText.textContent = `You tie! You both selected ${playerSelection}`;
            result = 'tie';
            break;
        case playerSelection == 'rock' && computerSelection == 'scissors':
        case playerSelection == 'scissors' && computerSelection == 'paper':
        case playerSelection == 'paper' && computerSelection == 'rock':   
            roundResultsText.textContent = `Player wins! ${capitaliseFirstLetter(playerSelection)} beats ${computerSelection}`;
            result = 'player';
            break;
        default:
            roundResultsText.textContent = `Computer wins! ${capitaliseFirstLetter(computerSelection)} beats ${playerSelection}`;
            result = 'computer';
            break;
    }
    return result;
}

function declareResults (result) {
    
    if (result === 'player') {
        playerCount += 1;
    } else if (result === 'computer') {
        computerCount += 1;
    }

    roundCountText.textContent = `Player: ${playerCount} Computer: ${computerCount}`;
    
    if (playerCount === scoreToWin) {
        roundCountText.textContent = 'Player Wins!';
        replayGame();
    } else if (computerCount === scoreToWin) {
        roundCountText.textContent = 'Computer Wins!';
        replayGame();
    }
}

function replayGame () {
    gameStillGoing = false;
    roundResultsText.textContent = '';

    const replayButton = document.createElement('button');
    replayButton.innerText = 'Play again?';
    replayButton.classList.add('replay-button');
    let defaultCSSStyle = 'font-family: "Noticia Text", serif;text-decoration: underline;font-size: 2em;margin-top: 0.8px;margin-bottom: 0.4em;transition: transform 0.3s;font-weight: bold;'
    replayButton.style.cssText = defaultCSSStyle;

    replayButton.addEventListener('mouseover', () => {
        replayButton.style.cssText += 'transform: scale(1.02);';
    })

    replayButton.addEventListener('mouseout', () => {
        replayButton.style.cssText = defaultCSSStyle;
    })

    replayButton.addEventListener('click', () => {
        playerCount = 0;
        computerCount = 0;
        roundCountText.textContent = `Player: ${playerCount} Computer: ${computerCount}`
        replayButton.remove();
        gameStillGoing = true;
    });

    document.body.appendChild(replayButton)
}