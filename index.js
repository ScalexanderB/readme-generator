// Require functions:
const fs = require("fs");

const util = require("util");

const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown.js");

// Question array for users to generate their readme, some inspiration from readme-guide
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Submit a name for your project.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Submit a description for your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Submit installation instructions for your project. Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Submit instructions for use, including screenshots when necessary.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'In the case that there are multiple developers, submit contribution guidelines on how to do so.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'If there are tests for this application, submit the test instructions and provide examples on how to run them.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Submit your email address.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Submit your GitHub username.'
    },
    {
        type: 'input',
        name: 'addquestions',
        message: 'When applicable, submit additional instructions on how to reach you with questions.'
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'Select a license for your project by choosing a number. Note: It is recommended that you save a separate LICENSE file in the root of your repository. Visit https://choosealicense.com/ for more details.',
        choices: [
            'Apache license 2.0',
            'Creative Commons Zero v1.0 Universal',
            'Do What The F*ck You Want To Public License',
            'GNU General Public License v3.0',
            'ISC',
            'MIT',
            'The Unlicense'
        ],
        default: 'MIT'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
