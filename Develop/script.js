// Assignment code here

//Prompt user for password criteria after button is clicked (password length, uppercase, lowercase, numbers & special characters)
function generatePassword() {
  console.log("The button was clicked!!");


  var characterLength = function() {
    let characterlength=prompt("How many characters would you like in your password?");
    let length = Number (characterlength);
  
     if (characterlength >= 8 && characterlength <= 128) {
      lowerCase (); //return to the next option
      }
      else {
        characterLength();
      
      } 
    }
    characterLength(); 


  var upperCase = function() {
    let uppercase = confirm("Would you like to include lowercase letters?");
    if (confirm == true) {
      //move to next question
    }
    else {
      //move to next question
    }
  }
  upperCase();
  
  var lowerCase = function() {
    
    let lowercase = confirm("Would you like to include lowercase letters?");

    if (confirm == true) {
      //move to next question
      upperCase();
    }
    else {
      //move to next question
      upperCase()
    }
  }
  lowerCase();

  var numeric = function() {
    let randomNumber = confirm("Would you like to include numbers in your password?");

    if (confirm == true) {
    //next question
    }
    else {
    //next question
    }
  }
  numeric();

  var specialCharacter = function() {
    let randomSymbols = confirm("Would you like to include special characters in your password?");

    if (confirm == true) {
      //generate password
    }
    else {
      //generate password
    }
  }

  

// validate the input that the user puts in 

//Password is generated


//Display the generated password on the page


  return "Your password was generated!";
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
