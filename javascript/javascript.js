function getComputerChoice () {
    let randomInt = Math.floor((Math.random() * 100));
    if ( randomInt <= 33) {
        return "ROCK";
    }

    else if ( randomInt <= 66) {
        return 'PAPER';
    }

    else {
        return 'SCISSORS';
    }
}

function getPlayerChoice () {
    let choice = prompt("What to play this turn? ");

    while ( choice == null ) {
        choice = prompt("Please play a valid option, What to play this turn? ");
    }   

    choice = choice.toUpperCase();
    while (choice !== 'ROCK' && choice !== 'PAPER' && choice !== 'SCISSORS') {
        choice = prompt("Please play a valid option, What to play this turn?");
        while ( choice == null ) {
            choice = prompt("Please play a valid option, What to play this turn? ");
        }  
        choice = choice.toUpperCase();
        
    }
    return choice;
        
}

function playRound ( playerSelection, computerSelection) {

    switch (playerSelection) {
        case "ROCK" : 
            if (computerSelection === 'PAPER') {
                score2++;
                return "You lose! Paper beats Rock.";
            }
            else if ( computerSelection === 'SCISSORS') {
                score1++;
                return "You win! Rock beats Scissors.";
            }
            else {
                return "Tie! You both played the same.";
            }
        
        case "PAPER" :
            if (computerSelection === 'ROCK') {
                score1++;
                return "You win! Paper beats Rock.";
            }
            else if (computerSelection === 'SCISSORS') {
                score2++;
                return "You lose! Scissors beats Paper.";
            }
            else {
                return "Tie! You both played the same.";
            }
        default :
            if (computerSelection === 'ROCK') {
                score2++;
                return "You lose! Rock beats Scissors.";
            }
            else if (computerSelection === 'PAPER') {
                score1++;
                return "You win! Scissors beats Paper.";
            }
            else {
                return "Tie! You both played the same.";
            }
    }
}

function game () {
    for ( let i = 1; i <= 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log("Round " + i);
        console.log(`Player played ${playerSelection}
                    Computer played ${computerSelection}`)
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player score : ${score1} ~ Computer score : ${score2}`);
    }


}

let score1 =    0, 
    score2 =    0;
let computerSelection;
let playerSelection;
alert("This is a game of 5 rounds!!");
game() ;

if (score1 > score2) {
    alert("Player wins.")
}

else if ( score1 < score2) {
    alert("Computer wins.")
}

else {
    alert("It's a tie, Can you believe it?")
}
