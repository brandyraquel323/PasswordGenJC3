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

var promptNumbers = window.prompt ("Would you like to include numbers? Enter 'YES or CANCEL'");
console.log(promptNumbers);

var promptSpecialChar = window.prompt ("Would you like to include special charaters? 'Enter YES or CANCEL'");

if (charLength<8) {
  window.alert("Please enter minimum of 8. Please follow all criteria");
  return;
}

if (charLength>128) {
  window.alert("Do not enter more than 128 characters");
  return;
}
else {
  window.alert("Acceptable Criteria");
}
alert(generatePassword(8));


function generatePassword(passwordLength) {
  var numberChars = "0123456789";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var specialChars = "!@#$%^&*()";
  var allChars = numberChars + upperChars + lowerChars + specialChars;
 
  var randomPasswordArray = Array(passwordLength);

randomPasswordArray[0] = numberChars;
randomPasswordArray[1] = upperChars;
randomPasswordArray[2] = lowerChars;
randomPasswordArray[3] = specialChars;
randomPasswordArray= randomPasswordArray.fill(allChars, 4);
return shuffleArray(randomPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
}
 
function shuffleArray(array) {
  for (var i= array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp =array[i];
    array[i]= array[j];
    array[j] = temp;
  }
  return array;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
}
