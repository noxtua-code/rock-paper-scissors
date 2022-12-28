const gameSelections = ['rock', 'paper', 'scissors'];
const playerSelectionButtons = document.querySelectorAll('button');
const roundResultsText = document.querySelector('.round-results')
let numOfRounds = 5;
let playerCount = 0;
let computerCount = 0;

playerSelectionButtons.forEach(element => {
    element.addEventListener('click', () => {
        let playerSelection = element.id
        let computerSelection = getComputerChoice();
        let result = playRound(computerSelection, playerSelection);
    });                   
});

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getComputerChoice() {  // randomly returns rock/paper/scissors
    let randomNumber = Math.floor(Math.random() * 3);
    return gameSelections[randomNumber];  
}  

// function getPlayerChoice() { // gets player choice from clicked button
//         let selection;

//         playerSelectionButtons = document.querySelectorAll('button');
//         playerSelectionButtons.forEach(element => {
//             element.addEventListener('click', () => selection = element.id);
//         });

//         return selection;
// }    

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

function declareOverallResults (playerCount, computerCount) {
    console.log('Player score is: ' + playerCount);
    console.log('Computer score is: ' + computerCount);

    if (playerCount === computerCount) {
        console.log('You tied with the computer!')
    } else if (playerCount > computerCount) {
        console.log('Player wins the game!')
    } else {
        console.log('Computer wins the game!')
    }
}

function replayGame() {
    let replayAnswer = prompt('Would you like to play again?').toLowerCase()
    if (replayAnswer === 'yes') {
        game();
    } 
}

function game() { // increments score based on the winner of the round. If there is a tie, it reruns the round
    

    // for (let i = 0; i < numOfRounds; i++) {
    //     console.log('Round ' + (i + 1));
    //     while (true) {
            


    //         if (result === 'player') {
    //             playerCount += 1;
    //             break;
    //         } else if (result === 'computer') {
    //             computerCount += 1;
    //             break;
    //         }
    //     }
    // }
    // declareOverallResults(playerCount, computerCount)

    // replayGame()
}
   
