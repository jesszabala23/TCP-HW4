// Variable requires "inquirer" "fs" and "greeting.js"
var inquirer = require("inquirer");
var fs = require('fs');
var greeting = require('./greeting.js')

// Return the contents of "greeting.js" as a string in the variable "greeting"
console.log(greeting);

// Use fucntion, userQuestions, to prompt user input
//Inquire user for password, interest and Zodiac Sign
function userQuestions() {
  inquirer.prompt([
      {
        type: "input",
        name: "password",
        message: "What is your secret password?",
      },
      {
        type: "checkbox",
        name: "interest",
        message: "Please select all you favorite interest?",
        choices: [
          "Photography", 
          "Anime", 
          "Sports", 
          "Cooking",
          "Hiking"
        ]
      },
      {
        type: "list",
        name: "zodiac",
        message: "Please select your Zodiac Sign?",
        choices: [
          "Aries", 
          "Leo", 
          "Scorpio", 
          "Libra",
          "Cancer",
          "Gemini",
          "Taurus",
          "Virgo",
          "Sagittarius",
          "Capricorn",
          "Aquarius",
          "Pisces",
        ]
      },
    ])

// Write user's password to a new file named userPassword.txt
// Return "Welcome! You have created your profile." when user completes all prompts
    .then((answers) => {
        fs.writeFile("userPassword.txt", answers.password, function (err) {
        
        console.log("Welcome! You have created your profile.")
      });
    });
}

// Run userQuestions
userQuestions();