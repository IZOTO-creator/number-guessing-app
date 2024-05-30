let attempts = 0;
let randomNum = Math.floor(Math.random() * 100 + 1);

const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");

submit.addEventListener("click", checkGuess);

function checkGuess() {
  const userValue = Number(guess.value);
  attempts++;

  if (userValue === randomNum) {
    hint.textContent = "Congratulations, you guessed it right!";
  } else if (userValue < randomNum) {
    hint.textContent = "Too low! Try again.";
  } else if (attempts == 3) {
    hint.textContent = "GAME OVER!";
    setGameOver();
  } else {
    hint.textContent = "Too high! Try again.";
  }

  guess.value = "";

  function setGameOver() {
    guess.disabled = true;
    submit.disabled = true;
  }
}
