const gameSelections = ['rock', 'paper', 'scissors'];

function getNumberOfRounds() {
    let numOfRounds; 

    while (true) {
        numOfRounds = +prompt('How many rounds would you like to play?');
        if (!(isNaN(numOfRounds)))
            break;
        console.log('Please enter a number')
    }

    return numOfRounds;
}

function getComputerChoice() {  // randomly returns rock/paper/scissors
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(gameSelections[randomNumber]);
    return gameSelections[randomNumber];  
}  

function getPlayerChoice() { // prompts player for selection, and only accepts input if it matches gameSelections
    let gettingPrompt = true;
    let selection; 
    
    while (gettingPrompt) {
        selection = prompt('Select a choice between rock, papers or scissors:').toLowerCase();
        if (gameSelections.includes(selection)){
            gettingPrompt = false;
        } else {
            console.log('Please type selection again')
        }
    }
    console.log(selection);
    return selection;
}    

function playRound(computerSelection, playerSelection) { //determines the result of the round 
    let result;
    
    switch(true) {
        case playerSelection === computerSelection:
            console.log('You tie!')
            result = 'tie'
            break;
        case playerSelection == 'rock' && computerSelection == 'scissors':
        case playerSelection == 'scissors' && computerSelection == 'paper':
        case playerSelection == 'paper' && computerSelection == 'rock':           
            console.log('Player wins');
            result = 'player'
            break;
        default:
            console.log('Computer wins');
            result = 'computer'
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

function game() { // increments score based on the winner of the round. If there is a tie, it reruns the round
    let numOfRounds = getNumberOfRounds()

    let playerCount = 0;
    let computerCount = 0;

    for (let i = 0; i < numOfRounds; i++) {
        console.log('Round ' + (i + 1));
        while (true) {
            let playerSelection = getPlayerChoice();
            let computerSelection = getComputerChoice();
            let result = playRound(computerSelection, playerSelection);

            if (result === 'player') {
                playerCount += 1;
                break;
            } else if (result === 'computer') {
                computerCount += 1;
                break;
            }
        }
    }
    declareOverallResults(playerCount, computerCount)
}
   

game();