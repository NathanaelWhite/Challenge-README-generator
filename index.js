// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  // add validation
  {
    type: "input",
    name: "title",
    message: "What is the title of your application?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of the application:",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use.",
  },
  {
    type: "confirm",
    name: "confirmScreenshot",
    message: "Would you like to include a screenshot?",
    default: true,
  },
  {
    type: "input",
    name: "screenshot",
    message: "Provide the images relative filepath",
    when: ({ confirmScreenshot }) => confirmScreenshot,
  },
  {
    type: "input",
    name: "contributing",
    message: 'How can others contribute to this application?'
  },
  {
      type: 'input',
      name: 'test',
      message: 'Add tests for your application.'
  },
  {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub user name.'
  },
  {
      type: 'input',
      name: 'questions',
      message: 'Please add your email address for additional questions'
  },
  {
    type: "list",
    name: "license",
    message: "Choose your license",
    choices: ["MIT", "Apache", "BSD", "GPL"],
  },
];

// TODO: Create a function to write README file
const writeToFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', data, (err) => {
        // if there is an error, reject the promise 
        if (err) {
            reject(err)
            return;
        }
        // if there are no errors, resolve the promise
        resolve({
            ok: true,
            message: 'File created',
        });
    });
  });
}

// TODO: Create a function to initialize app
const init = () => {
  inquirer
  .prompt(questions)
  .then((readmeData) => {
      console.log(readmeData);
      return generateMarkdown(readmeData);
  })
  .then((data) => {
      return writeToFile(data)
  })
  .catch((err) => {
      console.log(err);
  });
};

// Function call to initialize app
init();
