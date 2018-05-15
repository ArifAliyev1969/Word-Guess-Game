/* Create list of word for program */
var carBrands = ["Volvo", "Saab", "BMW", "Mersedes-Benz", "Ford", "Shevrolet", "Toyota", "Mazda", "Honda", "Chrysler", "Tesla", "Hyundai", "Kia", "Mitsubishi", "Nissan", "Subaru", "Lexus", "Suzuki", "Fiat", "Acura", "Audi", "Volkswagen", "General Motors", "Jaguar", "Jeep", "Ferrary", "Dodge", "Citroen", "Infiniti", "Land Rover", "Lamborghini" ];

/* Randomly chooses a word from the options array. This is the Computer's guess.*/
var computerGuess = Math.floor(Math.random() * carBrands.length);

/* Store this word. */

var computerGuessWord = carBrands[computerGuess];

/* Count lenght of the word*/

var computerGuessLenghth = computerGuessWord.length;

var display = [computerGuessLenghth];

var win = computerGuessLenghth;

var letters = computerGuessWord.split(' ');

var attempsLeft = 15;

var output = "";

var userLetter = "";


/* This function is run whenever the user presses a key. */
    document.onkeyup = function(event) {

/* Determines which key was pressed.*/
    var userGuess = event.key;



// This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number

function myFunction(){
    var str = computerGuessWord; 
    var res = str.charAt(0); 
    if (userGuess == res) 

} 



    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
    var html =
      "<p>You chose: " + userGuess + "</p>" +
      "<p>The computer chose: " + computerGuess + "</p>" +
      "<p>wins: " + wins + "</p>" +
      "<p>losses: " + losses + "</p>" +
   

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
  }
};


 

