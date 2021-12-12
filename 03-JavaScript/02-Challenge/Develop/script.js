// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.onclick = function() {
  window.alert("Welcome to Password Generator! Press 'OK' to begin")
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
