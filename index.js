const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const restartBtn = document.getElementById("restart");
const playerEmoji = document.getElementById("player-emoji");
const computerEmoji = document.getElementById("computer-emoji");

let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

const emojiMap = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️"
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (playerScore >= winningScore || computerScore >= winningScore) return;

    const playerMove = button.id;
    const computerMove = computerPlay();

    playerEmoji.textContent = emojiMap[playerMove];
    computerEmoji.textContent = emojiMap[computerMove];

    const result = playRound(playerMove, computerMove);
    resultEl.textContent = result;

    if (playerScore === winningScore || computerScore === winningScore) {
      showWinner();
    }
  });
});

restartBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = "0";
  computerScoreEl.textContent = "0";
  resultEl.textContent = "";
  playerEmoji.textContent = "❔";
  computerEmoji.textContent = "❔";
  restartBtn.style.display = "none";
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(player, computer) {
  if (player === computer) return "It's a tie!";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return `You win! ${player} beats ${computer}`;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return `You lose! ${computer} beats ${player}`;
  }
}

function showWinner() {
  if (playerScore > computerScore) {
    resultEl.textContent = "🎉 You WON the game!";
  } else {
    resultEl.textContent = "💀 You LOST the game!";
  }
  restartBtn.style.display = "inline-block";
}
