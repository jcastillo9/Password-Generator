// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var upperCaseLet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseLet = "abcdefghijklmnopqrstuvwxyz";
  var numberList = "1234567890";
  var specialList = "`~!@#$%^&*()_-=+[]{}|;':\",.<>?";


  // Characters Types
  var characters = "";
  var upperCaseChosen = "";
  var lowerCaseChosen = "";
  var numberChosen = "";
  var specialChosen = "";
  var password1 = "";
  var tempPass = "";
  var finalPassword = "";

  userInput();


  function userInput() {
    characters = "";

    // Determine password length 
    passwordLength = prompt("How many characters would you like your password to be? (between 8-128 characters)");
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please try again.Password length must be between 8-128 characters.");
      return passwordLength;
    } else if (isNaN(passwordLength)){
      alert("Please try again. Password length must be between 8-128 characters.");
      return passwordLength;
    }

    // Adding uppercase letters
    upperCaseChosen = confirm("Would you like your password to include uppercase letters? ('Ok' for yes. 'Cancel' for no.)")
    //Adding lowercase letters
    lowerCaseChosen = confirm("Would you like your password to include lower case letters? ('Ok' for yes. 'Cancel' for no.)")
    //Adding numbers
    numberChosen = confirm("Would you like your password to include numbers? ('Ok' for yes. 'Cancel' for no.)")
    //Adding special characters
    specialChosen = confirm("Would you like your password to include special characters? ('Ok' for yes. 'Cancel' for no.)")
  }

  
  if (upperCaseChosen === false && lowerCaseChosen === false && numberChosen === false && specialChosen === false) {
    return "Please select at least one character type.";
  }
  
  if (upperCaseChosen === true) {
    characters = characters + upperCaseLet;
  }

  if (lowerCaseChosen === true) {
    characters = characters + lowerCaseLet;
  }

  if (numberChosen === true) {
    characters = characters + numberList;
  }

  if (specialChosen === true) {
    characters = characters + specialList;
  }

  //  Password Generator
    for (var i = 0; i < passwordLength; i++) {
      password1 = Math.floor(Math.random() * characters.length);
      tempPass = characters[password1];
      finalPassword = finalPassword + tempPass;
      } 
      return finalPassword
    
  };    
