let playerScore = 0;
let computerScore = 0;

const computerPlay = () => {
  const arrOptions = [`rock`, `paper`, `scissors`];
  const randomNumber = Math.floor(Math.random() * 3);
  const computerChoice = arrOptions[randomNumber];
  return computerChoice;
}

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return `It's a tie!`
  }
  else if (playerSelection === `rock` && computerSelection === `scissors`) {
    playerScore++
    return `Rock beats Scissors. You win!`
  }
  else if (playerSelection === `rock` && computerSelection === `paper`) {
    computerScore++
    return `Paper beats Rock. You lose!`
  }
  else if (playerSelection === `paper` && computerSelection === `rock`) {
    playerScore++
    return `Paper beats Rock. You win!`
  }
  else if (playerSelection === `paper` && computerSelection === `scissors`) {
    computerScore++
    return `Scissors beats Paper. You lose!`
  }
  else if (playerSelection === `scissors` && computerSelection === `rock`) {
    computerScore++
    return `Rock beats Scissors. You lose!`
  }
  else if (playerSelection === `scissors` && computerSelection === `paper`) {
    playerScore++
    return `Scissors beats Paper. You win!`
  }
}
const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(`Make your choice. Rock, paper, or scissors?`).toLowerCase()
    if (playerSelection != `rock` && playerSelection != `paper` && playerSelection != `scissors`) {
      alert(`Invalid input`), i--
    } 
    else {
      playRound;
    }
    const computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
    console.log(playRound(playerSelection, computerSelection))
  }
  if (playerScore > computerScore) {
    return `You won the game!`
  }
  else if (playerScore < computerScore) {
    return `Tragically, you lost...`
  }
  else {
    return `The game resulted in a tie.`
  }
}

console.log(game())