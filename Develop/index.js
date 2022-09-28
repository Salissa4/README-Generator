// Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');
const {generateMarkdown} = require('./utils/generateMarkdown')

// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license should your project have?',
        choices: ['Apache', 'MIT', 'BSD 2', 'Eclipse' ],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How does one install?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command is used to run a test?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: ' ',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How to contribute to the repo?',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync()
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log('Generating README');
        writeToFile('README.MD', generateMarkdown, ({...answers}));
    });
}

// Function call to initialize app
init();
