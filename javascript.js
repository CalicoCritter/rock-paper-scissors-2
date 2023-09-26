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
    if (computerChoice === playerChoice) {return `It's a tie! You both selected ${playerChoice}!`
    } else if 
     (computerChoice === "Rock" && playerChoice === "Paper" || 
     computerChoice === "Paper" && playerChoice === "Scissors" || 
     computerChoice === "Scissors" && playerChoice === "Rock") {return `You win! ${playerChoice} beats ${computerChoice}!`
    } else {return `You lose! ${computerChoice} beats ${playerChoice}!`}

}

function game () {
    for (let i=0; i < 5; i++) {
        const result=playRound();
        console.log(result);
}
}
//create a loop 