// function to generate markdown for README
function generateMarkdown(response) {
  return `
  # Welcome to ${response.projectName} (${response.projectVersion})
  <a href="${response.licenseURL}">
    <img alt="License: ${response.licenseName}" src="https://img.shields.io/badge/license-${response.licenseName}-yellow.svg" target="_blank" />
  </a>


  ## Description 

  > ${response.projectDescription}
  
 
  ## Table of Contents

  * [Homepage](#homepage)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Author](#author)
  * [Contributing](#contributing)
  * [License](#license)
  * [Questions](#questions)
  
  
  ## Homepage

  🏠 [Homepage](${response.projectHomepage})
  

  ## Installation
  \`\`\`bash
  ${response.installCommand}
  \`\`\`

 
  ## Usage 
  \`\`\`bash
  ${response.usageComInst}
  \`\`\`


  ## Tests
  \`\`\`bash
  ${response.testCom}
  \`\`\`


  ## Author

  👤 **${response.authorName}**
  * GitHub: [@${response.gitHubUserName}](https://github.com/${response.gitHubUserName})


  ## Contributing

  Contributions, issues and feature requests are welcome!

  Feel free to check [issues page](https://github.com/${response.gitHubUserName}/${response.projectName}/issues). You can also take a look at the [contributing guide](${response.contriGuide}).


  ## Questions

  Please send your questions and suggestions to [my email](${response.authEmail})
  * GitHub: [@${response.gitHubUserName}](https://github.com/${response.gitHubUserName})


  ## License

  Copyright © 2020 [${response.authorName}](https://github.com/${response.gitHubUserName}).

  This project is [${response.licenseName}](${response.licenseURL}) licensed.

  
 
`;
}

module.exports = generateMarkdown;
