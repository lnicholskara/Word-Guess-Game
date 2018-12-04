//Declare global variables.

var words = [
    'hogwarts',
    'muggle',
    'voldemort',
    'magic'];

var guessingWord
var lettersGuessed
var numOfGuesses = 10;
var wins = 0;
var guessingWordDisplay

//Computer displays preset values, selects random word as default and shows the letters as dashes.

function getItem() {

    winsDisplay.textContent = wins;
    numOfGuessesDisplay.textContent = numOfGuesses;
    
    guessingWord = words[Math.floor(Math.random() * words.length)];

    guessingWordDisplay.textContent = []
        for (var i = 0; i < guessingWord.length; i ++)
        guessingWordDisplay.push('-');

}

//Listen for user keystroke.

//Store that value in a variable

//Compare that value to the word - if match, show on screen - else remove guess and include under letters guessed

//Continue or loop logic through all guesses

//If all letters guessed win + increase wins count

//Else automatically restart game