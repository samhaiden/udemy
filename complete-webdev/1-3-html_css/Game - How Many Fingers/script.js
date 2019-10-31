var randomNumber = Math.random();

randomNumber = randomNumber * 6;

randomNumber = Math.floor(randomNumber);

document.getElementById("submitGuess").onclick = function() {
	
	var guess = document.getElementById("guess").value;
	
	if (guess == randomNumber) {
		alert("You guessed it! The number was " + randomNumber);	
		alert("Would you like to play again?");
		window.location.reload();
	}	else if (guess > randomNumber) {
		alert("Too high... guess a lower number.")
	}	else if (guess < randomNumber) {
		alert("Too low... guess a higher number.")
	}
}