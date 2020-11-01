const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
console.log("hello");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "Project name",
    name: "projectName",
  },
//   {
//     type: "input",
//     message: "Project version",
//     name: "projectVersion",
//   },
//   {
//     type: "input",
//     message: "Project description",
//     name: "projectDescription",
//   },
//   {
//     type: "input",
//     message: "Project homepage",
//     name: "projectHomepage",
//   },
//   {
//     type: "input",
//     message: "Project documentation url",
//     name: "projectDocuURL",
//   },
//   {
//     type: "input",
//     message: "Author name",
//     name: "authorName",
//   },
//   {
//     type: "input",
//     message: "Github username",
//     name: "gitHubUserName",
//   },
//   {
//     type: "input",
//     message: "Project prerequisites",
//     name: "projectPreRequ",
//   },
//   {
//     type: "input",
//     message: "Project name",
//     name: "projectName",
//   },
//   {
//     type: "input",
//     message: "License name",
//     name: "licenseName",
//   },
//   {
//     type: "input",
//     message: "License url",
//     name: "licenseURL",
//   },

//   {
//     type: "input",
//     message: "Install command",
//     name: "installCommand",
//   },
//   {
//     type: "input",
//     message: "Usage command or instruction",
//     name: "usageComInst",
//   },
//   {
//     type: "input",
//     message: "Test command",
//     name: "testCom",
//   },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(response =>{
        // call generateMarkdown function & get data in a variable to write on the file
        let markDownData = generateMarkdown(response);
        // call writeToFile function
        writeToFile("generatedRM.md", markDownData);
    });
}

// function call to initialize program
init();
