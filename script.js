// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Variables
var passLength;
var uppercase;
var lowercase;
var number;
var special;
var input=[];
var include=[];

// Defining Variables
var characters={
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  number: "1234567890",
  special: "`~!@#$%^&*()-_=+[]{}\|;:',.<>/?"
};

function generatePassword(){
// User Input
passLength = prompt("Provide a number between 8 and 128 characters for your password length.");

// Error
if(!passLength || passLength <8 || passLength >128 || isNaN(passLength)){
  alert("Please provide a number between 8 and 128!"); 
  generatePassword();
  }
else {
  console.log(`You have selected ${passLength} for your password length.`)
};

// Password Contents
// Lowercase
lowercase = confirm("Will your password include a lowercase letter?");  
  if(lowercase){
    console.log("Lowercase: ", lowercase);
    input += characters.lowercase;
    include.push(characters.lowercase[Math.floor(Math.random()*characters.lowercase.length)]);
  };

 // Uppercase
 uppercase = confirm("Will your password include an uppercase letter?");
 if(uppercase){
  console.log("Uppercase: ", uppercase);
  input += characters.uppercase;
  include.push(characters.uppercase[Math.floor(Math.random()*characters.uppercase.length)]);
 };

 // Numbers
 number = confirm("Will your password include a number?");
 if(number){
  console.log("Number: ", number);
  input += characters.number;
  include.push(characters.number[Math.floor(Math.random()*characters.number.length)]);
 };

  // Specials
  special = confirm("Will your password include a special character?");
  if(special){
   console.log("Special Character: ", special);
   input += characters.special;
   include.push(characters.special[Math.floor(Math.random()*characters.special.length)]);
  };

// Error
  if (!lowercase && !uppercase && !number && !special){
    alert("You must choose at least one type of character to include!");
    generatePassword();
   };
  
// Loop to match password length
   while(include.length < passLength){
    include.push(input[Math.floor(Math.random()*passLength)]);
   };
  
// Return New Password
var password = include.join("");
password = password.toString();
console.log("Your newly generated password is: " + password);
return password;  
};