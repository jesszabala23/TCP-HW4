// Variable requires "inquirer" "fs" and "greeting.js"
var inquirer = require("inquirer");
var fs = require('fs');
var greeting = require('./greeting.js')

// Return the contents of "greeting.js" as a string in the variable "greeting"
console.log(greeting)

// Use fucntion userQuestions to prompt user input
//Inquire user for password
function userQuestions() {
    inquirer.prompt([
    {
      type: "input",
      name: "password",
      message: "What will be your secret password?"
    }
])

// Write user questions to a new file named userPassword.txt
// throws an error, you could also catch it here
// Return "Thank You!" when user completes input
fs.writeFile('userPasswordTEST.txt', userQuestions, (err) => {

    if (err) throw err;
    
    console.log('Thank You!');
})
}
