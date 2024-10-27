let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	const choice = ["rock", "paper", "scissors"];
	return choice[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
	return prompt().toLowerCase();
}

function playGame() {
	rounds = parseInt(
		prompt("How many rounds should we play? (Best out of ___)"),
		10
	);
	for (let i = 0; i < rounds; i++) {
		const computerInput = getComputerChoice();
		const humanInput = getHumanChoice();
		playRound(computerInput, humanInput);
		console.log(`Your Score: ${humanScore}`);
		console.log(`Computer Score: ${computerScore}`);
	}
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
playGame();

// if (humanScore > computerScore) {
// 	console.log(
// 		`Congratulations, You are the overall winner. You won ${humanScore} out of ${rounds} games`
// 	);
// } else if (humanScore === computerScore) {
// 	console.log(
// 		`Both of you won ${humanScore} out of ${rounds} games. You can do better!`
// 	);
// } else {
// 	console.log("You lost. Better luck next time!");
// }

const buttonStart = document.getElementById("startButton");
const startSection = document.querySelector(".start");
const playAreaSection = document.querySelector(".playarea");
const roundNumber = document.querySelector(".gameName");
const buttonRock = document.querySelector(".choice rock");
const buttonPaper = document.querySelector(".choice paper");
const buttonScissors = document.querySelector(".choice scissors");

buttonStart.addEventListener("click", () => {
	startSection.style.display = "none";
	playAreaSection.style.display = "block";
	roundNumber.textContent = "Round";
});
