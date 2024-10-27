let humanScore = 0;
let computerScore = 0;
let rounds;
let currentRound = 1;
const buttonStart = document.getElementById("startButton");
const startSection = document.querySelector(".start");
const playAreaSection = document.querySelector(".playarea");
const scoreSection = document.querySelector(".result");
const resultMessage = document.getElementById("resultMessage");
const roundNumber = document.querySelector(".gameName");
const buttonRock = document.querySelector(".choice.rock");
const buttonPaper = document.querySelector(".choice.paper");
const buttonScissors = document.querySelector(".choice.scissors");
let humanPoints = document.getElementById("userScore");
let computerPoints = document.getElementById("computerScore");

function getComputerChoice() {
	const choice = ["rock", "paper", "scissors"];
	return choice[Math.floor(Math.random() * 3)];
}

function playRound(computerChoice, humanChoice) {
	let message;
	if (computerChoice === humanChoice) {
		message = `Both chose ${humanChoice}. It's a tie!`;
	} else if (
		(computerChoice === "rock" && humanChoice === "scissors") ||
		(computerChoice === "scissors" && humanChoice === "paper") ||
		(computerChoice === "paper" && humanChoice === "rock")
	) {
		message = `${
			computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
		} beats ${humanChoice}. You lost this round!`;
		computerScore++;
	} else {
		message = `${
			humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
		} beats ${computerChoice}. You won this round!`;
		humanScore++;
	}
	resultMessage.textContent = message;
}

buttonStart.addEventListener("click", () => {
	rounds = parseInt(document.getElementById("total-rounds").value);
	startSection.style.display = "none";
	playAreaSection.style.display = "block";
	roundNumber.textContent = `Best of ${rounds}`;
	scoreSection.style.display = "block";
	updateRoundNumber();
});

buttonRock.addEventListener("click", () => handleClick("rock"));
buttonPaper.addEventListener("click", () => handleClick("paper"));
buttonScissors.addEventListener("click", () => handleClick("scissors"));

function handleClick(playerChoice) {
	if (currentRound <= rounds) {
		const computerInput = getComputerChoice();
		playRound(computerInput, playerChoice);
		humanPoints.textContent = humanScore;
		computerPoints.textContent = computerScore;
		currentRound++;
		updateRoundNumber();
	}
}

function updateRoundNumber() {
	if (currentRound > rounds) {
		endGame();
	} else {
		roundNumber.textContent = `Round ${currentRound}`;
	}
}

function endGame() {
	if (humanScore > computerScore) {
		roundNumber.textContent = `You won the game with a score of ${humanScore} to ${computerScore}! 🎉`;
	} else if (computerScore > humanScore) {
		roundNumber.textContent = `Computer won the game with a score of ${computerScore} to ${humanScore}. Better luck next time!`;
	} else {
		roundNumber.textContent = `It's a tie! Both scored ${humanScore}.`;
	}

	playAreaSection.style.display = "none";
	const playAgainButton = document.createElement("button");
	playAgainButton.textContent = "Play Again";
	playAgainButton.className = "--btn";
	scoreSection.appendChild(playAgainButton);

	playAgainButton.addEventListener("click", () => resetGame(playAgainButton));
}

function resetGame(playAgainButton) {
	humanScore = 0;
	computerScore = 0;
	currentRound = 1;

	humanPoints.textContent = humanScore;
	computerPoints.textContent = computerScore;
	roundNumber.textContent = "New Game - Enter Rounds";

	startSection.style.display = "block";
	playAreaSection.style.display = "none";
	scoreSection.style.display = "none";

	playAgainButton.remove();
}
