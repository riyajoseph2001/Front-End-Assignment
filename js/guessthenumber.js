// Generate a random secret number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const guesses = [];

// Function to play the game
function playGame() {
    while (true) {
        const userGuess = prompt("Guess a number between 1 and 100:");

        // Check if the user clicked "Cancel" or entered an empty string
        if (userGuess === null || userGuess === "") {
            break;
        }

        const guess = parseInt(userGuess);
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Please enter a valid number between 1 and 100.");
        } else {
            attempts++;

            if (guess === secretNumber) {
                alert('Congratulations! You guessed the secret number ' +secretNumber+ ' in ' + attempts + ' attempts.');
                guesses.push(guess);
                break;
            } else if (guess < secretNumber) {
                alert("Too low. Try again.");
                guesses.push(guess);
            } else {
                alert("Too high. Try again.");
                guesses.push(guess);
            }
        }
    }
    //Display the list of guesses and the number of attempts
    const resultContainer = document.createElement("div");
    resultContainer.innerHTML = `<h2>Game Over</h2>`;
    resultContainer.innerHTML += `<p>Secret Number was ${secretNumber}</p>`;
    resultContainer.innerHTML += `<p>Number of Attempts: ${attempts}</p>`;
    resultContainer.innerHTML += `<p>Your Guesses: ${guesses.join(", ")}</p>`;
    document.body.appendChild(resultContainer);
}

// Start the game
playGame();