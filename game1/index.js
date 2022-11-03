function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const computerGuess = getRndInteger(1, 100);
console.log(computerGuess);

const prompt = require('prompt-sync')({ sigint: true });

const userName = prompt('Welcome to game!, what is your name? ');

let userGuess = prompt('What is your first guess? ');

let counter = 0;



// userGuess = prompt('guess another ? ');

while (userGuess != computerGuess) {
    console.log(`your ${userGuess} answer is wrong`);
    if (userGuess > computerGuess) {
        console.log('Yor answer is higher, please add lower value');
    } else {
        console.log('Yor answer is lower, please add higher value');
    }

    userGuess = prompt('try another attempt? ');
    counter++;
}

console.log(`Congratulations ${userName}, You won after ${counter} attempts and correct answer was ${computerGuess}`);

// console.log(computerGuess);