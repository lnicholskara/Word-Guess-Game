//Declare global variables.

var words = [
    'hogwarts',
    'muggle',
    'voldemort',
    'magic'];

var guessingWord
var lettersGuessed = []
var numOfGuesses = 10;
var wins = 0;
var answerArray

//Computer displays preset values, selects random word as default and shows the letters as dashes.

function getItem() {

    winsDisplay.textContent = wins;
    numOfGuessesDisplay.textContent = numOfGuesses;
    
    guessingWord = words[Math.floor(Math.random() * words.length)];

    answerArray = [];

    for (var i = 0; i < guessingWord.length; i++) {
        answerArray[i] = "_";
    }

    answerArrayDisplay.textContent = answerArray.join(" ");

    lettersGuessedDisplay.textContent = lettersGuessed;
    
}

// Take input from the player or listen for user keystroke.
document.onkeyup = function(event) {
    var userChoice = event.key;
    console.log(userChoice);
    
    // Check if the letter the user chose matches any of the guessingWord's letters
    var userGuessedRight = false;

    for (var i = 0; i < guessingWord.length; i++) {
        var letter = guessingWord[i];

        if (userChoice.toLowerCase() == letter) {
            answerArray[i] = letter;
            userGuessedRight = true;
        }

        else {
            userGuessedRight = false;
        }

    }

    // Show the player their progress
    // Update answerArrayDisplay for every correct guess

    if (userGuessedRight = true) {
        answerArrayDisplay.textContent = answerArray.join(" ")
    }
    
    // Update numOfGuessesDisplay and lettersGuessedDisplay for every correct guess
    
    else {
        numOfGuesses--;
        numOfGuessesDisplay.textContent = numOfGuesses;

        lettersGuessed.push(letter);
        lettersGuessedDisplay.textContent = lettersGuessed;
    }
    
    // Check if the game is over

    if (answerArray == ["h", "o", "g", "w", "a", "r", "t", "s"] || answerArray == ["m", "u", "g", "g", "l", "e"] || answerArray == ["v", "o", "l", "d", "e", "m", "o", 'r', "t"] || answerArray == ["m", "a", "g", "i", "c"]) {
        wins++;
        getItem();
    }

    else if (numOfGuesses = 0) {
        getItem();
    }

}

//Store that value in a variable

//Compare that value to the word - if match, show on screen - else remove guess and include under letters guessed

//Continue or loop logic through all guesses

//If all letters guessed win + increase wins count

//Else automatically restart 