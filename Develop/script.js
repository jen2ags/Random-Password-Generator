// Assignment code here
var possibleCharacters = []
var character = 0
//Prompt user for password criteria after button is clicked (password length, uppercase, lowercase, numbers & special characters)
function generatePassword() {
  console.log("The button was clicked!!");


  var characterLength = function () {
    var characterlength = window.prompt("How many characters would you like in your password? You must pick a number between 8 and 128.");
    character = Number(characterlength);

    if (characterlength >= 8 && characterlength <= 128) {
      console.log("The correct number was entered!"); //next option
    }
    else {
      window.alert("Please try again!");
      characterLength();

    }
  }
  characterLength();


  var upperCase = function () {
    var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    var uppercase = window.confirm("Would you like to include uppercase letters?");
    if (uppercase === true) {
      //use uppercase letters
      possibleCharacters.push(...upperCaseCharacters);
      console.log(possibleCharacters);

      console.log("OK was clicked! You are including uppercase.");
    }
    else {
      //move to next question
      console.log("Cancel was clicked! You are not including uppercase.");
    }
  }
  upperCase();

  var lowerCase = function () {
    var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    var lowercase = confirm("Would you like to include lowercase letters?");

    if (lowercase === true) {
      //move to next question
      possibleCharacters.push(...lowerCaseCharacters);
      console.log(possibleCharacters);
      console.log("OK was clicked! You are including lowercase.");
    }
    else {
      //move to next question
      console.log("Cancel was clicked! You are not including lowercase.");
    }
  }
  lowerCase();

  var numeric = function () {
    var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    var randomNumber = confirm("Would you like to include numbers in your password?");

    if (randomNumber === true) {
      //next question
      possibleCharacters.push(...numberCharacters);
      console.log(possibleCharacters);
      console.log("OK was clicked! You are including numbers.");
    }
    else {
      //next question
      console.log("Cancel was clicked! You are not including numbers.");
    }
  }
  numeric();

  var specialCharacter = function () {
    var symbolCharacters = ['!', '@', '#', '$', '%', '&', '?', '/', '~', '*', '(', ')', '^']
    var randomSymbols = confirm("Would you like to include special characters in your password?");

    if (randomSymbols == true) {
      //generate password
      possibleCharacters.push(...symbolCharacters);
      console.log(possibleCharacters);
      console.log("OK was clicked! You are including special characters.");
    }
    else {
      //generate password
      console.log("Cancel was clicked! You are not including special characters!");
    }
  }
  specialCharacter();

  var createPassword = function () {
    for (let index = 0; index < character; index++) {
    var passwordChar = getRandomCharacter(possibleCharacters)
    console.log(passwordChar)

    }
  }
  createPassword();

  // validate the input that the user puts in 

  //Password is generated


  //Display the generated password on the page


  return "Your password was generated!";
}

function getRandomCharacter(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
} 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
