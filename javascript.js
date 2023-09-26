function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() +string.slice(1).toLowerCase();
}

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random()* 3) + 1;
    if (randomNumber == 1) { return 'Rock';
    } else if (randomNumber == 2)  { return 'Paper';
 } else if (randomNumber == 3) { return 'Scissors'; 
    };
}

//Create a playRound function for rock paper scissors,
//returning whether or not you win or lose

function playRound() {
    let playerChoice = prompt ('Rock, Paper, or Scissors?');
    playerChoice = capFirstLetter(playerChoice);
    const computerChoice = getComputerChoice();
    if (computerChoice === playerChoice) {return "It's a tie!"
    } else if (computerChoice === "Rock" || playerChoice === "Paper") {return `You win! {$playerChoice} beats {$computerChoice}!` 
    } else if (computerChoice === "Paper" || playerChoice === "Scissors") {return `You win! {$playerChoice} beats {$computerChoice}!`
    } else if (computerChoice === "Scissors" || playerChoice === "Rock") {return `You win! {$playerChoice} beats {$computerChoice}!`
    } else {return `You lose! {$computerChoice} beats {$playerChoice}!`}

}


//create a loop 