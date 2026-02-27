// select form for event listener and grab input value
const form = document.querySelector('form');
// array to show previos gasses
let guesses = [];
// attempts left in attempting to guess the number
let attempts = 10;
// random number generator
let target = Math.floor(Math.random() * 100) + 1;
// show rezults or error messages to use.
const result = document.querySelector('#result');
// previos guesses div select and attempts left div select
const previosGuesses = document.querySelector('#previosGuesses');
const attemptsLeft = document.querySelector('#attemptsLeft');
let playGame = true;
const startButton = document.createElement('p');
startButton.textContent = 'Start New Game';
startButton.style.cursor = 'pointer';
startButton.style.marginTop = '10px'; // Added a little spacing
startButton.style.padding = '8px';
startButton.style.backgroundColor = 'white';
startButton.style.color = 'black';
startButton.style.borderRadius = '5px';
console.log(target);

form.addEventListener('submit', function (e){
    e.preventDefault();
    // grabing the input
    const input = parseInt(document.querySelector('#inputValue').value);
    if(!validation(input)){
        result.innerHTML = 'Enter number between 1 and 100'
        return;
    }
    // attempts check
    if(!attemptsCheck()){
        result.innerHTML = `${attempts} attempts are left Game-Over! The number was ${target}`;
        gameOver();
        return;
    }else{
        attempts--;
        attemptsLeft.innerHTML = `${attempts}`
    };
    guessCheck(input);
    if (!playGame) {
        result.innerHTML = `Congratulations! You've guessed the number ${target} correctly!`;
        gameOver();
        return;
    }
    
    // add guess to guesses array and show it
    showAttempts(input);
})

function validation(input){
    if(isNaN(input) || input < 1 || input > 100 || input === ''){
        return false;
    }
    return true;
}

function guessCheck(input){
        if(input === target){
            playGame = false
        }else if(input > target){
            result.innerHTML = 'Target Number is low'
        }else if(input < target){
            result.innerHTML = 'Target Number is high'
        }
        document.querySelector('#inputValue').value = '';
}


function gameOver(){
    const input = document.querySelector('#inputValue');
    input.setAttribute('disabled', '');
    input.value = '';
    document.querySelector('.below').appendChild(startButton);
    startButton.addEventListener('click', function(){
        resetGame();
    })
}

function resetGame(){
    attempts = 10;
    target = Math.floor(Math.random() * 100) + 1;
    guesses = [];
    document.querySelector('#inputValue').removeAttribute('disabled');
    document.querySelector('.below').removeChild(startButton);
    result.innerHTML = '';
    attemptsLeft.innerHTML = `${attempts}`;
    previosGuesses.innerHTML = '';
}

function showAttempts(input){
      guesses.push(input);
      previosGuesses.innerHTML =guesses.join(', ');
}


function attemptsCheck(){
    if(attempts < 1){
        return false;
    }
        return true;
}
