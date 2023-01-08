// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let passwordLength;
let includeLowercase;
let includeUppercase;
let includeNumeric;
let includeSpecial;

// Select the button
var button = document.querySelector("#generate");

// Add an event listener to the button
button.addEventListener("click", function() {
  getPasswordOptions();
});

// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = prompt("How many characters you want your password to be?");
  while (isNaN(passwordLength) || passwordLength < 10 || passwordLength > 65) {
    if (passwordLength === null) {
      return;
    }
    alert("Please enter a password length between 10 and 64 characters using numbers only.");
    passwordLength = prompt("How many characters you want your password to be?");
  }

  includeLowercase = confirm("Do you want to use lowercase characters?");
  includeUppercase = confirm("Do you want to use uppercase characters?");
  includeNumeric = confirm("Do you want to use numeric values?");
  includeSpecial = confirm("Do you want to use special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    getPasswordOptions();
  }
}

// Function for getting a random element from an array
function getRandomOption(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function to generate password with user input
function generatePassword() {
// Create an empty string that will hold the password
var password = "";
// Create an array that includes all of the character types the user has selected
var characterArray = [];
if (includeLowercase) {
  characterArray = characterArray.concat(lowerCasedCharacters);
}
if (includeUppercase) {
  characterArray = characterArray.concat(upperCasedCharacters);
}
if (includeNumeric) {
  characterArray = characterArray.concat(numericCharacters);
}
if (includeSpecial) {
  characterArray = characterArray.concat(specialCharacters);
}
for (var i = 0; i < passwordLength; i++) {
  password = password + getRandomOption(characterArray);
}
return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);