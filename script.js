// Assignment Code
var generateBtn = document.querySelector("#generate");

console.log(generateBtn);

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ';', ':', "'", '"', ',', '.', '/', '<', '>', '?'];

var characterSet = [];
var password = '';

function generatePassword() {
  var passwordLength = +prompt('Please provide a passowrd length');

  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
  var wantsLowercase = true;
  var wantsUppercase = true;
  var wantsNumbers = true;
  var wantsSpecialCharacters = true;

  var generateBtn = document.querySelector("#generate");

  function writePassword() {

  if (wantsLowercase) {
    characterSet = characterSet.concat(lowercase)
  }

  if (wantsUppercase) {
    characterSet = characterSet.concat(uppercase)
  }

  if (wantsNumbers) {
    characterSet = characterSet.concat(numbers)
  }


  if (wantsSpecialCharacters) {
    characterSet = characterSet.concat(specialCharacters)
  }}


  for (var count = 0; count < passwordLength; count++) {
    var ranIndex = Math.floor(Math.random() * characterSet.length); password += characterSet[ranIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = writePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  password = '';
  writePassword();
  passwordText.value = password;
});
