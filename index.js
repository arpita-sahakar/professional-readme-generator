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
  {
    type: "input",
    message: "Project version",
    name: "projectVersion",
  },
  {
    type: "input",
    message: "Project description",
    name: "projectDescription",
  },
  {
    type: "input",
    message: "Project homepage",
    name: "projectHomepage",
  },

  {
    type: "input",
    message: "Author name",
    name: "authorName",
  },
  {
    type: "input",
    message: "Github username",
    name: "gitHubUserName",
  },
  {
    type: "list",
    message: "License name",
    name: "licenseName",
    choices: [
      "APM",
      "AUR license",
      "Bower",
      "Cocoapods",
      "Conda",
      "CPAN",
      "CRAN/METACRAN",
      "Crates.io",
      "CTAN",
      "DUB",
      "Eclipse Marketplace",
      "GitHub",
      "Hex.pm",
      "NPM",
      "Packagist License",
      "PyPI",
    ],
  },
  {
    type: "input",
    message: "License url",
    name: "licenseURL",
  },

  {
    type: "input",
    message: "Install command",
    name: "installCommand",
  },
  {
    type: "input",
    message: "Usage command or instruction",
    name: "usageComInst",
  },
  {
    type: "input",
    message: "Test command",
    name: "testCom",
  },
  {
    type: "input",
    message: "Contributing guide URL",
    name: "contriGuide",
  },
  {
    type: "input",
    message: "Author Email",
    name: "authEmail",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {
    // call generateMarkdown function & get data in a variable to write on the file
    let markDownData = generateMarkdown(response);
    // call writeToFile function
    writeToFile("README-generated.md", markDownData);
  });
}

// function call to initialize program
init();
