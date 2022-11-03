function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



(() => {

    let minimum = 0;
    let maximum = 100;

    // let computerGuess = Math.floor((minimum + maximum) / 2);
    let computerGuess = getRndInteger(minimum, maximum);

    let counter = 1;

    while (true) {
        computerGuess = computerGuess = getRndInteger(minimum, maximum);
        alert(`Computer guess: ${computerGuess}`)
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





    setTimeout(() => {

        const game_code_html = document.getElementById('game_code_html');
        game_code_html.innerHTML = `Wow I read your mind, your answer is ${computerGuess} and I found it by ${counter} times attempt!`;
    }, 2000);



})()