function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const prompt = require("prompt-sync")({ sigint: true });


let minimum = 0;
let maximum = 100;

let computerGuess = Math.floor((minimum + maximum) / 2);
// let computerGuess = getRndInteger(minimum, maximum);

let counter = 1;

while (true) {
    computerGuess = Math.floor((minimum + maximum) / 2);
    console.log(`Computer guess: ${computerGuess}`)
    let yourResponse = prompt(`is it right answer? l or h or t?`);
    if (yourResponse.toLocaleLowerCase() == 'l') {
        minimum = computerGuess + 1;
    } else if (yourResponse.toLocaleLowerCase() == 'h') {
        maximum = computerGuess - 1;
    } else if (yourResponse.toLocaleLowerCase() == 't') {
        break;
    }
    counter++;

}

console.log(`Wow I read your mind, your answer is ${computerGuess} and I found it by ${counter} times attempt!`);
