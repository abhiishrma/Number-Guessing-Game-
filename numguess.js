let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;
guessField.focus();

function checkguess(){
    let userGuess = Number(guessField.value);
    if(guessCount === 1){
        guesses.textContent = "Previous Guess : ";
    }
    guesses.textContent += userGuess + ", ";

    if(userGuess === randomNumber){
        lastResult.textContent = "Congratulations ! You've Guessed The Right Number";
        lastResult.style.backgroundColor = 'green';
        lastResult.style.color = 'white';
        lowOrHigh.textContent = ' ';
        setGameOver();
    }else if(guessCount === 10){
        lastResult.textContent = "Game Over";
        setGameOver();
    }else{
        lastResult.textContent = 'Wrong! Try Again';
        lastResult.style.backgroundColor = 'red';
        lastResult.style.color = 'white';
        if(userGuess < randomNumber){
            lowOrHigh.textContent = "Last Guess Was Too Low";
        }else if(userGuess > randomNumber){
            lowOrHigh.textContent = "Last Guess Was Too High";
        }
    }
    guessCount ++;
    guessField.value = ' ';
    guessField.focus();
}
guessSubmit.addEventListener('click',checkguess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = "Start New Game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame(){
    guessCount = 1;
    const reset = document.querySelector('.result p');
    for( i= 0; i <reset.length; i++){
        reset[i].textContent = ' ';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = ' ';
    guessField.focus();
    
    lastResult.style.backgroundColor = 'white'; 
    lowOrHigh.textContent = ' ';
    guesses.textContent = ' ';
    lastResult.textContent = ' ';
    randomNumber = Math.floor(Math.random() * 100) + 1;

}