// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.onclick = function() {
  window.alert("Welcome to Password Generator! Press 'OK' to begin")


promptCharLength = window.alert("Password requires minimum of 8 characters and no more than 128 characters");


Criteria = window.alert("Password includes combination of special characters, lenght of characters, numbers, uppercase letters, lowercase letters. Pick password Criteria on next prompt");
window.alert("Choose password Criteria");

var charLength = window.prompt("Enter number of characters between 8 and 128")
console.log(charLength);

var promptUpper = window.prompt ("Would you like to include upper case letters? Enter 'YES or CANCEL'");
console.log(promptUpper);

var promptLower = window.prompt ("Would you like to include lower case letters? Enter 'YES or CANCEL'");
console.log(promptLower)

var prompNumbers = window.prompt ("Would you like to include numbers? Enter 'YES or CANCEL'");








}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
