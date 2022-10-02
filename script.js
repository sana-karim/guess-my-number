let inputDisplay = document.querySelector('.input-display');
let resultDisplay = document.querySelector('.result-display');
let scoreDisplay = document.querySelector('.score');
let highscoreDisplay = document.querySelector('.display-highscore');
let againBtn = document.querySelector('.again-btn');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const bgColorChange = (querySelector, color) => {
    document.querySelector(querySelector).style.backgroundColor = color;
    document.querySelector(querySelector).style.transition = "1s";
}
const colorChange = (querySelector, color) => {
    document.querySelector(querySelector).style.color = color
    document.querySelector(querySelector).style.transition = "1s";
}

document.querySelector('.check-btn').addEventListener('click', function () {

    let inputNumber = Number(document.querySelector('.input-field').value);

    if (inputNumber < 0 || inputNumber > 20) {
        resultDisplay.innerHTML = "Enter Between 1 to 20";
    } else {
        if (!inputNumber) {
            resultDisplay.innerHTML = "No Input!";
        } else if (secretNumber === inputNumber) {
            inputDisplay.innerHTML = secretNumber;
            resultDisplay.innerHTML = "Correct Answer";
            bgColorChange(".parent-container", "#60b347");
            bgColorChange(".input-field", "#60b347");
            colorChange(".input-display", "#60b347");
            colorChange(".again-btn", "#60b347");
            colorChange(".check-btn", "#60b347");
            if (score > highScore) {
                highScore = score;
                highscoreDisplay.innerHTML = highScore;
            }
        } else if (secretNumber !== inputNumber) {
            if (score > 1) {
                resultDisplay.innerHTML = secretNumber > inputNumber ? "Too Low" : "Too High";
                score--;
                scoreDisplay.innerHTML = score;
            } else {
                resultDisplay.innerHTML = "You Lost the Game";
                scoreDisplay.innerHTML = 0;
                bgColorChange(".parent-container", "#b34747");
                bgColorChange(".input-field", "#b34747");
                colorChange(".input-display", "#b34747");
                colorChange(".again-btn", "#b34747");
                colorChange(".check-btn", "#b34747");
            }
        }
    }
});

againBtn.addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    resultDisplay.innerHTML = 'Start guessing...';
    scoreDisplay.innerHTML = score;
    inputDisplay.innerHTML = '?';
    document.querySelector('.input-field').value = null;
    bgColorChange(".parent-container", "#363636");
    colorChange(".input-display", "#363636");
    bgColorChange(".input-field", "#363636");
    colorChange(".again-btn", "#363636");
    colorChange(".check-btn", "#363636");
});