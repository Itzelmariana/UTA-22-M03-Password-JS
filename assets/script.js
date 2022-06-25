// Assignment Code

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// My code

// list of criteria requested
var passwordCriteria = {
  passwordSpecialCharacters: [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "{",
    "}",
    "[",
    "]",
    "|",
    "/",
    ":",
    ";",
    "'",
    '"',
    "<",
    ">",
    ",",
    ".",
    "?",
  ],
  passwordNumbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  passwordUppercase: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  passwordLowercase: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
};
function generatePassword() {
  var chars = [];

  //Criteria 1. Length
  var pwdLength;
  for (; isNaN(pwdLength) || pwdLength < 8 || pwdLength > 128; ) {
    pwdLength = Number(
      prompt("What is your ideal password length between 8 to 128 characters?")
    );
  }

  //Criteria 2. lowercase
  var pwdLowercase = confirm("Would you like to include lowercase?");

  if (pwdLowercase) {
    chars = chars.concat(passwordCriteria.passwordLowercase);
  }

  //Criteria 3. Upppercase
  var pwdUppercase = confirm("Would you like to include uppercase?");

  if (pwdUppercase) {
    chars = chars.concat(passwordCriteria.passwordUppercase);
  }

  //Criteria 4. Number

  var pwdNumber = confirm("Would you like to include numbers?");

  if (pwdNumber) {
    chars = chars.concat(passwordCriteria.passwordNumbers);
  }

  //Criteria 5. Special Character
  //----Prompt
  var pwdSpecialCharacter = confirm(
    "Would you like to include special characters?"
  );
  //----If stament takes data from array
  if (pwdSpecialCharacter) {
    chars = chars.concat(passwordCriteria.passwordSpecialCharacters);
  }
  //----For loop for returning value
  var password = "";
  for (var charsloop = 0; charsloop < pwdLength; charsloop++) {
    var charIndex = Math.floor(Math.random() * chars.length);
    password += chars[charIndex];
  }

  return password;
}
