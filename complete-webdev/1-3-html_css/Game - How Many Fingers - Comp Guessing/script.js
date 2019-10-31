
document.getElementById("submitNumber").onclick = function() {
	
	var myNumber = document.getElementById("myNumber").value;
	
	var numberOfGuesses = 1;
	
	var correct = false;
	
	while (correct == false) {
	
	var compGuess = Math.random();
	
	compGuess = compGuess * 11;

	compGuess = Math.floor(compGuess);
		
	if (compGuess == myNumber) {
	
		correct = true;
		
		alert("I guessed it! The number was " + compGuess + ". It took me " + numberOfGuesses + " guesses.");	
		
		alert("Would you like to play again?");
		
		window.location.reload();
		
	}	else {
		
		numberOfGuesses++;
	}
}

}
