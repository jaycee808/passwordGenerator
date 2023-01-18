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

// Global variables
var passwordLength = "";
var passwordChoices = [];

// Function to prompt user for password options
function generatePassword() {
    var finalPassword = [];
    var passwordLength = (prompt("What length of password do you want? The password has to have a minimum of 10 characters and a maximum of 64"));

    while(passwordLength < 10 || passwordLength > 64) {
        alert("Please choose a number between 10 and 64!");
        // ask user for password length again
        generatePassword();
    }

    // Prompts to choose characters to include in password
    var confirmSpecialCharacters = confirm("Do you want the password to include special characters?");
    var confirmNumericCharacters = confirm("Do you want the password to include numbers?");
    var confirmLowerCasedCharacters = confirm("Do you want the password to include lowercase characters?");
    var confirmUpperCasedCharacters = confirm("Do you want the password to include uppercase characters?");

    // if statement to include selected characters
    if (confirmSpecialCharacters) {
        passwordChoices = passwordChoices.concat(specialCharacters);
    } 
    if (confirmNumericCharacters) {
        passwordChoices = passwordChoices.concat(numericCharacters);
    } 
    if (confirmLowerCasedCharacters) {
        passwordChoices = passwordChoices.concat(lowerCasedCharacters);
    } 
    if (confirmUpperCasedCharacters) {
        passwordChoices = passwordChoices.concat(upperCasedCharacters);
    }
    if (confirmSpecialCharacters === false &&  confirmNumericCharacters === false && confirmLowerCasedCharacters === false && confirmUpperCasedCharacters === false) {
        alert("Please choose at least one character type!");
        // start user inputs again
        generatePassword();
    } 
    
    // for loop to select random characters
    for (var i = 0; i < passwordLength; i++) {
      var passwordCharacter = passwordChoices[Math.floor(Math.random() * passwordChoices.length)];
        console.log(passwordCharacter);
        finalPassword.push(passwordCharacter);
    }

    return finalPassword.join("");
}

// Query selector to link generate button in html to javascript
var generateBtn = document.querySelector('#generate');

// Function to display password on screen
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
}
// Event listener to display password on screen
generateBtn.addEventListener('click', writePassword);