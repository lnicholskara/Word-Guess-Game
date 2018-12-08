//Declare global variables.

var words = [
    'quidditch',
    'muggle',
    'broomstick',
    'magic',
    'gryffindor',
    'slytherin',
    'hufflepuff',
    'ravenclaw',
    'wand',
    'charms',
    'herbology',
    'potions'
];

var guessingWord;
let lettersGuessed = [];
var numOfGuesses = 10;
var wins = 0;
var answerArray;

//Computer displays preset values, selects random word as default and shows the letters as dashes.

//This function runs on load or when game is won or lost.

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

//Function to print current number of wins to screen. Only called on load

function setScore() {
    winsDisplay.textContent = wins;
}

// Take input from the player or listen for user keystroke.

document.onkeyup = function(event) {
    var userChoice = event.key;    
        
    // Check if the letter the user chose matches any of the current guessingWord's letters

    var correctGuess = false;
    var answerValue = guessingWord.length;
 

    for (var i = 0; i < guessingWord.length; i++) {
        
        var letter = guessingWord[i];

        //If user chose correct letter, put input into answer display and print to screen.

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

    //Is this key press a new wrong answer?

    for (var j = 0; j < lettersGuessed.length; j++) {
        var alreadyGuessed = lettersGuessed[j];

        //If so, exit this loop and don't enter the next "if" statement

        if (userChoice.toLowerCase() == alreadyGuessed) {
            correctGuess = true;
            break;
        }

        else {
            console.log("originalGuess");
        }
    }

    //Checking to see if user key press is a valid letter before marking as incorrect answer.

    var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var allowedKey = false;

    for (var k = 0; k < alphabetArray.length; k++) {
        var alphabetChoice = alphabetArray[k];

        //If the key press is a valid letter, exit this loop and don't enter the next "if" statement.

        if (userChoice.toLowerCase() === alphabetChoice) {
            allowedKey = true;
            break;
        }

        else {
            
        }
    }

    //If user input was not correct or a duplicate entry, count the letter as a guess and display.

    //If incorrect guess...

    if (correctGuess === false && allowedKey === true) {

        //Reduce number of guesses remaining by 1 and print to screen

        numOfGuesses--;
        numOfGuessesDisplay.textContent = numOfGuesses;

        //Update the letters already guessed array
    
        lettersGuessed.push(userChoice);
        lettersGuessedDisplay.textContent = lettersGuessed.join(" ");
    }

    else {
        console.log("correct guess made")
    }

    // Check if the game is over and if so, restart the game!

    //If won!

    if (answerArray.join('') == guessingWord) {
        wins++;
        winsDisplay.textContent = wins;

        //Theme music from Harry Potter plays only when user wins!

        document.getElementById("my_audio").play();
        getItem();
        console.log("true-3");
    } 

    //If lost :(

    else if (numOfGuesses <= 0) {
        getItem();
        console.log("false-3");
    }

    //If game continues...

    else {
        console.log("false-4");
        return;

    } 

}