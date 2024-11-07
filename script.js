// Declare variables
let input = document.querySelector(".input");
let btn = document.querySelector(".submit");
let playAgain = document.querySelector(".playAgain");
let warning = document.querySelector(".error");

// Taking random number
let random = parseInt(Math.random() * 10 + 1);

// number count
let numCount = 5;
let guessLeft = document.querySelector(".leftGuess");
guessLeft.innerHTML = `Guesses left: ${numCount}`

// Event listener for button click
btn.addEventListener("click", () => {
  let guess = parseInt(input.value);
  validate(guess);
  leftGuesses(guess);
});

// validate
function validate(guess) {
  if (guess === random) {
    warning.style.color = "green";
    warning.innerHTML = "Correct!";
    input.value = "";
    win();
  } else if (guess > 10 || guess < 1) {
    warning.innerHTML = "Please enter a number between 1 and 10";
    warning.style.color = "red";
    input.value = "";
  } else if (isNaN(guess) || guess === "") {
    warning.innerHTML = "Please enter a valid number";
    warning.style.color = "red";
    input.value = "";
  } else if (guess > random) {
    warning.innerHTML = "Too high!";
    warning.style.color = "red";
    input.value = "";
  } else if (guess < random) {
    warning.innerHTML = "Too low!";
    warning.style.color = "red";
    input.value = "";
  }
}

// guessLeft
function leftGuesses(guess) {
  if (guess === random) {
    return;
  }
  if (
    warning.innerHTML == "Please enter a valid number" ||
    warning.innerHTML == "Please enter a number between 1 and 10"
  ) {
    return;
  }

  numCount--;

  if (numCount <= 0) {
    gameOver();
    return;
  }

  guessLeft.innerHTML = `Guesses left: ${numCount}`;
}

// win
function win() {
  input.setAttribute("disabled", "");
  guessLeft.innerHTML = " ";
  btn.style.display = "none";
  input.setAttribute("placeholder", "Winner 🎉");
  playAgain.style.display = "block";
}
// game over
function gameOver() {
  input.setAttribute("disabled", "");
  btn.style.display = "none";
  input.setAttribute("placeholder", "Loser 😂");
  warning.innerHTML = "You lose!";
  warning.style.color = "red";
  guessLeft.innerHTML = " ";
  playAgain.style.display = "block";
}

// start again
playAgain.addEventListener("click", () => {
  location.reload();
});
