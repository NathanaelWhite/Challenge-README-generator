// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    // add validation
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?'
    },
    {
        type: 'confirm',
        name: 'confirmDescription',
        message: 'Would you like to add a description of your application?',
        default: true
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide some information about the application:',
        when: ({ confirmDescription }) => confirmDescription
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions);
};

// Function call to initialize app
init();
