const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchedCardsCount = 0; // To track the number of matched cards
const totalPairs = cards.length / 2; // Total pairs in the game (8 pairs in this case)

const winnerMessage = document.querySelector('.winner-message');
const newGameButton = document.getElementById('new-game-button');

// Flip card function
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

// Check if the two flipped cards match
function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

// Disable cards if they match
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  matchedCardsCount++; // Increase the matched pairs count

  if (matchedCardsCount === totalPairs) {
    showWinnerMessage(); // If all pairs are matched, show the winner message
  }

  resetBoard();
}

// Unflip cards if they don't match
function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

// Reset the board for the next round
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// Shuffle cards at the start of the game
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();

// Add event listeners to all cards
cards.forEach(card => card.addEventListener('click', flipCard));

// Show the winner message when the game is won
function showWinnerMessage() {
  winnerMessage.style.display = 'block'; // Show the winner message and new game button
}

// New Game button event listener
newGameButton.addEventListener('click', function() {
  resetGame();
});

// Reset the game when "New Game" is clicked
function resetGame() {
  matchedCardsCount = 0;
  winnerMessage.style.display = 'none'; // Hide the winner message

  cards.forEach(card => {
    card.classList.remove('flip'); // Flip all cards back to hidden state
    card.addEventListener('click', flipCard); // Re-enable clicking for all cards
  });

  // Shuffle the cards again
  shuffle();
}

