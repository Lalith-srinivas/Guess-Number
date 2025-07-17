let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guess");
const submitBtn = document.getElementById("submit");
const message = document.getElementById("message");
const attemptDisplay = document.getElementById("attempts");
const restartBtn = document.getElementById("restart");

submitBtn.addEventListener("click", () => {
  const guess = Number(guessInput.value);
  attempts++;
  attemptDisplay.textContent = attempts;

  if (guess === randomNumber) {
    message.textContent = `🎉 Correct! The number was ${randomNumber}`;
    message.style.color = "lightgreen";
    submitBtn.disabled = true;
  } else if (guess < randomNumber) {
    message.textContent = "📉 Too Low!";
  } else {
    message.textContent = "📈 Too High!";
  }

  if (attempts === 10 && guess !== randomNumber) {
    message.textContent = `💀 Game Over! The number was ${randomNumber}`;
    message.style.color = "red";
    submitBtn.disabled = true;
  }
});

restartBtn.addEventListener("click", () => {
  attempts = 0;
  attemptDisplay.textContent = attempts;
  message.textContent = "";
  guessInput.value = "";
  submitBtn.disabled = false;
  randomNumber = Math.floor(Math.random() * 100) + 1;
});
