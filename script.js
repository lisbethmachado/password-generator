console.log();

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lower = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", " t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U","V", "W", "X", "Y", "Z"]

// Write password to the #password input
function writePassword() {
  alert("Welcome to Password Generator!");
  
  var passwordLength = prompt("How long would you like your password?");
  passwordLength = parseInt(passwordLength);
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password
}

function generatePassword() {
  var characters = [];
  var charChoices = [];
  var special = confirm("Would you like to include special characters?");
  var nums = confirm("Would you like to include numeric characters?");
  var lower = confirm("Would you like to include lowercase characters?");
  var upper = confirm("Would you like to include uppercase characters?");
}

if (wantsSpecial) {
    var specialIndex = Math.floor(Math.random() * special.length);
    var randomSpecial = special[specialIndex];
    characters.push(randomSpecial);
    charChoices = charChoices.concat(special);
}
  
if (wantsNums) {
    var numsIndex = Math.floor(Math.random() * nums.length);
    var randomNums = nums[numsIndex];
    characters.push(randomNums);
    charChoices = charChoices.concat(nums);
}

if (wantsLower) {
    var lowerIndex = Math.floor(Math.random() * lower.length);
    var randomLower = lower[lowerIndex];
    characters.push(randomLower);
    charChoices = charChoices.concat(lower);
}

if (wantsUpper) {
    var upperIndex = Math.floor(Math.random() * upper.length);
    var randomUpper = upper[upperIndex];
    characters.push(randomUpper);
    charChoices = charChoices.concat(upper);
}

if (wantsSpecial || wantsNums || wantsLower || wantsUpper) {
  while (characters.length < passwordLength) {
    var randomIndex = Math.floor(Math.random() * charChoices.length);
    var randomCharacters = charChoices[randomIndex];
    characters.push(randomCharacters);
  }
}

passwordText.textContent = characters.join(", ");
// else {
// prompt("How long would you like your password?");
// }