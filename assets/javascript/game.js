//Declare global variables.

var words = [
    'hogwarts',
    'muggle',
    'voldemort',
    'magic'];

var guessingWord;
let lettersGuessed = [];
var numOfGuesses = 10;
var wins = 0;
var answerArray;

//Computer displays preset values, selects random word as default and shows the letters as dashes.
//This function runs on load, when game is won or lost.

function getItem() {

    numOfGuesses = 10;
    numOfGuessesDisplay.textContent = numOfGuesses;
    
    guessingWord = words[Math.floor(Math.random() * words.length)];

    answerArray = [];
    
    for (var i = 0; i < guessingWord.length; i++) {
        answerArray[i] = "_";
    }

    answerArrayDisplay.textContent = answerArray.join(" ");
    lettersGuessed.length = 0;
    lettersGuessedDisplay.textContent = lettersGuessed;

}

function setScore() {
    winsDisplay.textContent = wins;
}

// Take input from the player or listen for user keystroke.
document.onkeyup = function(event) {
    var userChoice = event.key;    
        
    // Check if the letter the user chose matches any of the guessingWord's letters
    var correctGuess = false;
    var answerValue = guessingWord.length;
 

    for (var i = 0; i < guessingWord.length; i++) {
        
        var letter = guessingWord[i];

        //If user chose correct letter, put input into answerArray and print to document.

        if (userChoice.toLowerCase() == letter) {
            answerArray[i] = letter;
            answerArrayDisplay.textContent = answerArray.join(" ");
            correctGuess = true;
            answerValue--;
            console.log(answerValue);
        } 

        else {
            console.log("wrongGuess");

        }

    }

    //Check if user input is original guess. If not, stops duplicate entries from being displayed.

    for (var j = 0; j < lettersGuessed.length; j++) {
        var alreadyGuessed = lettersGuessed[j];


        if (userChoice.toLowerCase() == alreadyGuessed) {
            correctGuess = true;
            break;
        }

        else {
            console.log("originalGuess");
        }
    }

    //If user input was not correct or a duplicate entry, count the letter as a guess and display.

    if (correctGuess === false) {
        numOfGuesses--;
        numOfGuessesDisplay.textContent = numOfGuesses;
    
        lettersGuessed.push(userChoice);
        lettersGuessedDisplay.textContent = lettersGuessed;

    }

    else {
        console.log("correct guess made")

    }
    

    // Check if the game is over and if so, restart the game

    
    console.log(answerValue);
    console.log (answerArray.join(''));
    console.log(guessingWord);
  

    if (answerArray.join('') == guessingWord) {
        wins++;
        winsDisplay.textContent = wins;
        getItem();
        console.log("true-3");
    } 

    else if (numOfGuesses <= 0) {
        getItem();
        console.log("false-3");
    }

    else {
        console.log("false-4");
        return;

    } 

}