//declare variables
var list = ["french", "english", "latin"];
var listSelect = Math.floor(Math.random() * list.length);
var word = list[listSelect];
var underscore = [];
var rightGuess = [];
var wrongGuess = [];

//DOM manipulation variables
var underscoreText = document.getElementsByClassName("underscore");
var rightGuessText = document.getElementsByClassName("right-guess");
var wrongGuessText = document.getElementsByClassName("wrong-guess");

//generate underscores
function underscoreGenerate() {
    for (let i = 0; i < word.length; i++) {
        underscore.push("_");
    }
    return underscore;
}
// get userguess
document.addEventListener("keypress", function (event) {
    var keyGuess = String.fromCharCode(event.keyCode);
    if (word.indexOf(keyGuess) > -1) {
        rightGuess.push(keyGuess);
        underscore[word.indexOf(keyGuess)] = keyGuess;
        underscoreText[0].innerHTML = underscore.join(" ");
        rightGuessText[0].innerHTML = rightGuess;
        if (underscore.join("") == word) {
            alert("You Win!")
        }
    }
    else {
        wrongGuess.push(keyGuess);
        wrongGuessText[0].innerHTML = wrongGuess;
        if (wrongGuess.length > 9) {
            alert("You Lose");
        }
    }
});
underscoreText.innerHTML = underscoreGenerate().join(" ");