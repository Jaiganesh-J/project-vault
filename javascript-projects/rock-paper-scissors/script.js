let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	const choice = ["rock", "paper", "scissors"];
	return choice[Math.floor(Math.random() * 3)];
}

function playRound(computerChoice, humanChoice) {
	if (computerChoice === humanChoice) {
		console.log(`${computerChoice} and ${humanChoice}. It's a tie`);
	} else if (
		(computerChoice === "rock" && humanChoice === "scissors") ||
		(computerChoice === "scissors" && humanChoice === "paper") ||
		(computerChoice === "paper" && humanChoice === "rock")
	) {
		console.log(`${computerChoice} beats ${humanChoice}. You lost`);
		computerScore++;
	} else {
		console.log(`${humanChoice} beats ${computerChoice}. You Won`);
		humanScore++;
	}
}

let rounds;
let currentRound = 1;
const buttonStart = document.getElementById("startButton");
const startSection = document.querySelector(".start");
const playAreaSection = document.querySelector(".playarea");
const scoreSection = document.querySelector(".result");
const roundNumber = document.querySelector(".gameName");
const buttonRock = document.querySelector(".choice.rock");
const buttonPaper = document.querySelector(".choice.paper");
const buttonScissors = document.querySelector(".choice.scissors");
let humanPoints = document.getElementById("userScore");
let computerPoints = document.getElementById("computerScore");

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

function endGame() {
	console.log("Play Again");
}

function updateRoundNumber() {
	if (currentRound > rounds) {
		endGame();
	} else {
		roundNumber.textContent = `Round ${currentRound}`;
	}
}
