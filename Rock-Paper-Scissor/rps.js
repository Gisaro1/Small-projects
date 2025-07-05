// Your game logic
function rps(player1, player2) {
  if (player1 === player2) {
    return "Draw!";
  }

  if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock")
  ) {
    return "Player 1 won!";
  }

  return "Player 2 won!";
}

// DOM Elements
const player1Buttons = document.querySelectorAll('.player-one button');
const player2Buttons = document.querySelectorAll('.player-two button');
const resultDisplay = document.querySelector('.game-result');

// Store choices
let player1Choice = '';
let player2Choice = '';

// Handle Player 1
player1Buttons.forEach(button => {
  button.addEventListener('click', () => {
    player1Choice = button.textContent.toLowerCase();
    checkIfReady();
  });
});

// Handle Player 2
player2Buttons.forEach(button => {
  button.addEventListener('click', () => {
    player2Choice = button.textContent.toLowerCase();
    checkIfReady();
  });
});

function checkIfReady() {
  if (player1Choice && player2Choice) {
    const outcome = rps(player1Choice, player2Choice);
    resultDisplay.innerHTML = `
      <p>Player 1: ${player1Choice}</p>
      <p>Player 2: ${player2Choice}</p>
      <p>Outcome: ${outcome}</p>
    `;

    // Reset choices for next round
    player1Choice = '';
    player2Choice = '';
  }
}

