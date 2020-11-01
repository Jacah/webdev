alert("Hello");
//Create secret number
var secretNumber = 4;

//Ask user for guess
var guess = prompt("Guess a number");


//Check Guess 
if(secretNumber === Number(guess))
{
    alert("You got it right!");
}
else if(Number(guess) > secretNumber)
{
    alert("Guessed too high, guess lower");
}
else(Number(guess) < secretNumber)
{
    alert("Guessed too low, guess higher");
