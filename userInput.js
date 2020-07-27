var inquirer = require("inquirer");
var fs = require('fs');
var greeting = require('/Users/TCP/TCPMaster/TCPbackend_July2020/backendProjects/HW1/greeting')

inquirer.prompt([
    {
      type: "input",
      name: "password",
      message: "Do you have the secret password?"
    },
    {
      type: "checkbox",
      message: "What languages do you know?",
      name: "stack",
      choices: [
        "HTML", 
        "CSS", 
        "JavaScript", 
        "MySQL"
      ]
    },