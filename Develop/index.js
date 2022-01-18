const inquirer = require("inquirer");


// TODO: Create an array of questions for user input
const questions = [{
    name: "Title",
    questions: "What is the title of the project?",
    type: "input",
},
 {
     name: "Description", 
     questions: "Describe your project:",
     type: "input",
 },
 {
     name: "Table of Contents",
     questions: "Enter Table of Contents:",
     type: "input",
        
 },
 {
    name: "Installation",
    questions: "Enter installation instructions:",
    type: "input",
 },
 {
     name: "Usage",    
     questions: "Examples of project usage:",
     type: "input",
 },
 {
     name: "License",
     questions: "Enter any license associated with project",
     type: "list",
 },
 {
     name: "Contributors",
     questions: "Who contributed to the project?",
     types: "input",
 },
 {
     name: "Tests", // Tests, and Questions
     questions: "Enter test instructions",
     type: "input",
 },
 {
     name: "Questions",
     questions: "Enter GitHub Username:",
     type: "input",
 },
 {
     questions: "Enter Email Address:",
     type: "input",
 },
];

// inquirer.prompt(questions);
console.log(questions);

// TODO: Create a function to write README file
// FS write to file method
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//review init 
function init() {}

// Function call to initialize app
// invokes init function
init();



// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled 



//WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions x
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests x

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// Questions to ask user:
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// Create links that redirect the table of contents to the correct section.
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README