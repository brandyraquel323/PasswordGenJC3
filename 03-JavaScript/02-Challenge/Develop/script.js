// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.onclick = function() {
  window.alert("Welcome to Password Generator! Press 'OK' to begin")


promptCharLength = window.alert("Password requires minimum of 8 characters and no more than 128 characters");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
