// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js")


// TODO: Create an array of questions for user input
const questions = [{
    message: "What is the title of the project?",
    name: "Title",
    type: "input",
},
 {
    message: "Describe your project:", 
    name: "Description", 
    type: "input",
 },
 {
     name: "Table of Contents",
     message: "Enter Table of Contents:",
     type: "input",
 },
 {
    name: "Installation",
    message: "Enter installation instructions:",
    type: "input",
 },
 {
     name: "Usage",    
     message: "Examples of project usage:",
     type: "input",
 },
 {
    message: "License associated with project:",
    name: "License",
    type: "list",
     //Look up lists of licenses from GitHub
    choices: ['None', 'MIT', 'ISC', 'GPLv3', 'Apache_2.0'],
 },
 {
     name: "Contributors",
     message: "Who contributed to the project?",
     types: "input",
 },
 {
     name: "Tests", // Tests, and Questions
     message: "Enter test instructions",
     type: "input",
 },
 {
     name: "Questions",
     message: "Enter GitHub Username:",
     type: "input",
 },
 {
     name: "E-mail",
     message: "Enter Email Address:",
     type: "input",
 },
];


    

// Create a function to write README file
// FS write to file method
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data);
//     };
function writeToFile(fileName, data) {
    return fs.writeFile(path.join(process.cwd(), fileName), data, function (err) {
        if (err) throw err;
        console.log("newReadMe.md has been created!");
    });
};


// (err) =>
//       err
//         ? console.error(err)
//         : console.log(
//             `Review for ${newReview.product} has been written to JSON file`
//           )




inquirer
   .prompt(questions)
   //changed inquirerResponse to answers
   .then((answers) => 
    // {   console.log(generateMarkdown);
       writeToFile("newReadMe.md",generateMarkdown({
           ...answers
       })));
    

// TODO: Create a function to initialize app
//review init 


// Function call to initialize app
// invokes init function



// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled 





// Create links that redirect the table of contents to the correct section.
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README