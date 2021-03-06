
var myArray = ["Skywalker", "Vader", "Wookie","Mandalorian", "Chewbacca", "Yoda", "Sidius", "Death Star"];
var word = myArray[Math.floor(Math.random() * myArray.length)];
var wordLength = word.length;
var lives = 10;
var lettersGuessed = [];
var score = 0;

var createPlaceholder = function(wordLength) {
    //Create an empty string var that we can add into, similar to lettersGuessed
    var currentState = '';
    for (var i = 0; i < wordLength; i++) {
        currentState += '-';
    }
        return currentState;
}
var currentState = createPlaceholder(wordLength);
function victory() {
    var result = false;
    if (currentState === word){
            score = score + 1
            document.getElementById("win").innerHTML = "The Force is strong with this one. Continue pressing keys";
            document.getElementById("score").innerHTML = "Wins " + score;   
            result = true;    
    }
    return result;
}

function checkLoss() {
    var result = false;
        if(lives === 0) {
            document.getElementById('lose').innerHTML = "I AM YOUR FATHER! YOU LOSE!";
            result = true;
        }
    return result;
}
document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);
    if(checkLoss() || victory()) {
                    myArray = ["Skywalker", "Vader", "Wookie","Mandalorian"];
                    word = myArray[Math.floor(Math.random() * myArray.length)];
                    wordLength = word.length;
                    lives = 10;
                    lettersGuessed = [];
                    currentState = createPlaceholder(wordLength);
                    }
        //This adds UNGUESSED letters into the array if they are not in the array, hence the -1
        if (lettersGuessed.indexOf(userGuess) === -1) {
           var wasPresent = false;
                //This goes through the word and finds the index of the letter that has been guessed
                for (var i = 0; i < wordLength; i++){
                    var correctGuess = word.charAt(i);
                //If it finds the match it will push it into the currentState
                    if (userGuess.toLowerCase() === correctGuess.toLowerCase()) {
                        console.log("DING DING");
                        wasPresent = true;
                        currentState = currentState.substr(0, i) + correctGuess + currentState.substr(i+1, i + wordLength);
                        console.log(currentState)
                        document.getElementById("placeHolder").innerHTML = currentState;
                    }   
                }
                if (!wasPresent) {
                    lives = lives - 1;
                    lettersGuessed.push(userGuess);
                    document.getElementById("guessed").innerHTML = "Guessed " + "[" +lettersGuessed + "]";
                    document.getElementById("lives").innerHTML ="Lives remaining: " + lives;
                }   
        }
    }



