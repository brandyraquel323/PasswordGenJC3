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

function generatePassword(lower, upper, number, special, lenght){

  let generatePassword ='';
  const typesCount = lower + upper + number + special;
  console.log("typesCount: ', typesCount")
  const typesArr =[{lower}, {upper}, {number}, {special}]
  console.log('typesarr: ', typesArr);
}

function generatePassword(passwordLength){
  var numberChars = "0123456789";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var specialChars = "!@#$%^&*()";
  var allChars = numberChars + upperChars + lowerChars + specialChars;
  var randomPasswordArray = Array(passwordLength);

  var generatePassword;
randomPassArray[0] = numberChars;
randomPassArray[1] = upperChars;
randomPassArray[2] = lowerChars;
randomPassArray[3] = specialChars;
randomPassArray= randomPassArray.fill(allChars), 4;
return shuffleArray(randomPassAray.map(function(x) { return x[Math.floor(Math.random() * x.lenght)] })).join ('');
}
 
function shuffleArray(array){
  for (var i= array.lenght - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var temp =array[i];
    array[i]= array[j];
    array[j] = temp;
  }
  return array;
}

var generateBtn = document.querySelector("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
alert(generatePassword(8));
}
