function makeGuess(correctAnswer) {
    
    var guess = Math.floor(Math.random() * 6);
    
    if (guess == correctAnswer) {
        
        return (true);
        
    } else {
        
        return (false);
    }
}

document.getElementById("button").onclick = function() {
    
    var myNumber = document.getElementById("myNumber").value;
    
    var correct = false;
    
    var compGuesses = 1;

    
    while (correct == false) {
        
        if (makeGuess(myNumber) == true) {
            
            correct = true;
            
            alert("Got it! The correct number was " + myNumber + " it took me " + compGuesses + " guesses.");
            
        } else {
            
            compGuesses++;
            
        }
        
    }
    
}

/*
document.getElementById("button").onclick = function() {
    
    var myNumber = document.getElementById("myNumber").value;
    
    var gotIt = false;
    
    var numberOfGuesses = 1;
    
    while (gotIt == false) {
    
        var guess = Math.floor(Math.random() * 6);

        if (guess == myNumber) {
            
            gotIt = true;
            
            alert("Got it! It was " + guess + ". It took me " + numberOfGuesses + " guesses.");

            } 
        
           else {
            
            numberOfGuesses++;
            
            }
            }
        }


//Computer to guess your number game

/*document.getElementById("button").onclick = function() {
    
    var myNumber = document.getElementById("myNumber").value;
    
    var gotIt = false;
    
    var numberOfGuesses = 1;
    
    while (gotIt == false) {
    
        var guess = Math.floor(Math.random() * 6);

        if (guess == myNumber) {
            
            gotIt = true;
            
            alert("Got it! It was " + guess + ". It took me " + numberOfGuesses + " guesses.");

            } 
        
           else {
            
            numberOfGuesses++;
            
            }
            }
        } */



// Random number game - user gets x number of guesses.

/*    var randomNumber = Math.floor(Math.random() * 5); 

    var turns = 5;
    
    var userGuess = ""; 

    alert("You have 5 guesses!");

  document.getElementById("remaining").innerHTML = turns;

    document.getElementById("btn").onclick = function() {
        
                turns = turns - 1;
       
        userGuess = document.getElementById("guess").value;
        
      if(userGuess == randomNumber) {
        
        alert("You guessed it! The number was ");
          
        alert("Want to play again?");
          
        window.location.reload();
        
    }
    
     if (userGuess > randomNumber) {
         
         alert("Too high... guess a lower number.");
     }   
    
     if (userGuess < randomNumber) {
         
         alert("Too low... guess a higher number.");
     }
    
     document.getElementById("remaining").innerHTML = turns; 
       
   }
 
*/
            




//Array that will list items on page

/* var colors = ["red","yellow","blue"];
            
            var colorLoop = "";

            var i;
    
            alert("Let's get started!");
            
            for (var i = 0; i < colors.length; i++) {
            
            colorLoop += colors[i] + " ";

            }
            
            document.getElementById("btn").onclick = function() {
                
                document.getElementById("colorList").innerHTML = colorLoop;
            } */

 /* var tweets = ["hi","bye","i'm back","weeee!"];

var tweetString = "";

var i = 0;
    
while (i <tweets.length) {
    
    tweetString = tweetString + "<p>" + tweets[i] + "</p>";
    
    i++;

} 

document.getElementById("tweetDiv").innerHTML = tweetString; */


/*for (i = 0; i < tweets.length; i++) {
         
    alert(tweets[i]); */

/*document.getElementById("logobtn").onclick = function() {
    
    var textInput = "";
    
    textInput = document.getElementById("textInput").value;
    
    document.getElementById("output").innerHTML = textInput;
    
} */


//Guess the Magic Word game


/*document.getElementById("btn").onclick = function() {
    
     var userTxt = document.getElementById("userInputTxt").value;
    
    var magicWord = "mike";
    
        if(userTxt == magicWord) {
    
            alert("Correct!");
    
        } else {
    
            alert("WRONG - Try again!")
        }
    
    document.getElementById("userInputTxt").value;
    
        }*/

/*document.getElementById("btn").onclick = function() {
    
    var textInput = document.getElementById("userInputTxt").value;
    
    document.getElementById("message").innerHTML = textInput;
    
}*/
