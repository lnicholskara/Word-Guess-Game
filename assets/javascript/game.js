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
    
    // Check if the letter the user chose matches any of the guessingWord's letters
    

    for (var i = 0; i < guessingWord.length; i++) {
        var letter = guessingWord[i];

        console.log(letter);
        console.log(userChoice);

        if (userChoice.toLowerCase() == letter) {
            answerArray[i] = letter;
            console.log("true-1");
            break;
        }

        else {
            console.log("false-1");
        }

    }

    // Show the player their progress
    // Update answerArrayDisplay for every correct guess

    if (userChoice.toLowerCase() == letter) {
        answerArrayDisplay.textContent = answerArray.join(" ");
        console.log("true-2");
    }
    
    ///Need to add else if option for if user guesses the same letter more than once!!!

    // Update numOfGuessesDisplay and lettersGuessedDisplay for every correct guess
    
    else {
        numOfGuesses--;
        numOfGuessesDisplay.textContent = numOfGuesses;

        lettersGuessed.push(userChoice);
        lettersGuessedDisplay.textContent = lettersGuessed;
        console.log("false-2");
    }
    
    // Check if the game is over and if so, restart the game

    if (answerArray = ["h", "o", "g", "w", "a", "r", "t", "s"] || answerArray == ["m", "u", "g", "g", "l", "e"] || answerArray == ["v", "o", "l", "d", "e", "m", "o", 'r', "t"] || answerArray == ["m", "a", "g", "i", "c"]) {
        wins++;
        getItem();
        console.log("true-3");
    }

     if (numOfGuessesDisplay >= 0) {
        getItem();
        console.log("false-3");
    }

    else {
        console.log("false-4");
        return;

    } 

}