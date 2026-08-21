let playerChoice = null;
let computerChoice = null;


// Choose Head or Tail
function chooseSide(choice) {

    playerChoice = choice;

    // Computer gets the opposite side
    if (choice === "Head") {
        computerChoice = "Tail";
    } else {
        computerChoice = "Head";
    }


    // Highlight selected button

    document
        .getElementById("head-btn")
        .classList.remove("selected");

    document
        .getElementById("tail-btn")
        .classList.remove("selected");


    if (choice === "Head") {
        document
            .getElementById("head-btn")
            .classList.add("selected");
    } else {
        document
            .getElementById("tail-btn")
            .classList.add("selected");
    }


    // Update message

    document.getElementById("message").textContent =
        `You chose ${choice}. The computer chose ${computerChoice}.`;


    // Enable Flip button

    document.getElementById("flip-btn").disabled = false;
}



// Flip the coin

function flipCoin() {

    if (!playerChoice) {
        return;
    }


    const coin = document.getElementById("coin");

    const message = document.getElementById("message");

    const flipButton = document.getElementById("flip-btn");


    // Disable button during toss

    flipButton.disabled = true;


    // Hide previous result

    document
        .getElementById("result")
        .classList.add("hidden");


    // Start animation

    coin.classList.remove("flipping");

    void coin.offsetWidth;

    coin.classList.add("flipping");


    // Suspense messages

    message.textContent = "🪙 Flipping...";


    setTimeout(() => {
        message.textContent = "3...";
    }, 500);


    setTimeout(() => {
        message.textContent = "2...";
    }, 900);


    setTimeout(() => {
        message.textContent = "1...";
    }, 1300);


    setTimeout(() => {

        // Randomly determine result

        const result =
            Math.random() < 0.5
                ? "Head"
                : "Tail";


        showResult(result);

    }, 1800);
}



// Show the result

function showResult(result) {

    const message =
        document.getElementById("message");

    const resultBox =
        document.getElementById("result");

    const resultTitle =
        document.getElementById("result-title");

    const resultMessage =
        document.getElementById("result-message");


    message.textContent =
        `The coin landed on ${result}! 🪙`;


    resultBox.classList.remove("hidden");


    if (result === playerChoice) {

        resultTitle.textContent =
            "🎉 YOU WIN! >.<";

        resultMessage.textContent =
            "Lucky flip! That was your side! ✨";

    } else {

        resultTitle.textContent =
            "💻 COMPUTER WINS!";

        resultMessage.textContent =
            "💙 Better luck next time! You've got this!";

    }
}



// Reset the game

function resetGame() {

    playerChoice = null;
    computerChoice = null;


    // Remove selection

    document
        .getElementById("head-btn")
        .classList.remove("selected");

    document
        .getElementById("tail-btn")
        .classList.remove("selected");


    // Reset message

    document.getElementById("message").textContent =
        "Choose Head or Tail to begin!";


    // Disable flip

    document.getElementById("flip-btn").disabled = true;


    // Hide result

    document
        .getElementById("result")
        .classList.add("hidden");


    // Reset coin

    document
        .getElementById("coin")
        .classList.remove("flipping");
}