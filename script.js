var generateBtn = document.querySelector("#generate");

console.log(generateBtn);

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ';', ':', "'", '"', ',', '.', '/', '<', '>', '?'];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function generatePassword() {
  var passwordLength = parseInt(prompt('Please provide a number for a password length between 8-128 characters.'));
  if (passwordLength < 8 || passwordLength > 128 ) {
    alert('must enter a valid length')
    return generatePassword();
  }
  if (isNaN(passwordLength)) {
    alert('must enter a number')
    return generatePassword();
  }
  var includeLowercase = confirm('Do you want to include lowercase?');
  if(!includeLowercase && !includeUppercase && !includeSpecial && !includeNumbers) {
    alert('must choose atleast one character type')
    return generatePassword();
  }
  var includeUppercase = confirm('Do you want to include uppercase?');
  var includeSpecial = confirm('Do you want to special characters?');
  var includeNumbers = confirm('Do you want to include numbers?');
  var password = '';
  var characterSet = [];

  if (includeLowercase) {
    characterSet = characterSet.concat(lowercase);
  }

  if (includeUppercase) {
    characterSet = characterSet.concat(uppercase);
  }

  if (includeNumbers) {
    characterSet = characterSet.concat(numbers);
  }

  if (includeSpecial) {
    characterSet = characterSet.concat(specialCharacters);
  }

  for (var count = 0; count < passwordLength; count++) {
    var ranIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[ranIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

