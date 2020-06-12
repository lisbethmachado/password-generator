// Assignment Code
var generateBtn = document.querySelector("#generate");

var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var lower = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", " t", "u", "v", "w", "x", "y", "z"]
var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  alert("Welcome to Password Generator!")
 var passwordLength = prompt ("How long would you like your password?");

if (passwordLength <8 || passwordLength >128) {
  alert("Please imput a number between 8 and 128.")
}

else {
  var special = confirm ("Would you like to include special characters?");
  var num = confirm ("Would you like to include numeric characters?");
  var lower = confirm ("Would you like to include lowercase letters?");
  var upper = confirm ("Would you like to include uppercase letters?");
}
}

