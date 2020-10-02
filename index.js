const fs = require("fs");
const inquirer = require("inquirer");


// Use the prompt method to ask the user a series of questions and get the user input.
inquirer
  .prompt([
      { 
        type: "input",
        message: "What is the name of the project?",
        name: "name",
      },
      {
        type: "input",
        message: "Please provide a description of the project?",
        name: "description",
      },
      {
        type: "input",
        message: "What are the steps required to install the project?",
        name: "install",
      },
      {
        type: "input",
        message: "What are the instructions and how to use this project?",
        name: "usage",
      },
      {
        type: "list",
        message: "What type of license is attached to this project?",
        name: "license",
        choices: [
          "ISC",
          "MIT",
          "Apache 2.0",
          "None"
        ],
      },

      {
        type: "input",
        message: "What are the guidelines for other developers that may wish to contribute to this project.",
        name: "contribute",
      },
      {
        type: "input",
        message: "How does a user test the project or provide an example of how to run a test?",
        name: "testing",
      },
      {
        type: "input",
        message: "What is your Github username?",
        name: "github",
      },

      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },

])

.then(function (answers) {
  // get licensing info badge
  switch (answers.license) {
    case "ISC":
      answers.license = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)" + " ISC License"
      break;
    case "MIT":
      answers.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" + " MIT License"
      break;
    case "Apache 2.0":
      answers.license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" + " Apache 2.0 License"
      break;
  }
  // create and write to file
  fs.writeFile("README.md", generateReadMe(answers), (err) => {
    console.log("success")
  })
    // generate the readme markdown file using variables and literal string 
    function generateReadMe(data) {

      return `# ${data.name}
    
## Description 
    
${data.description}
    
## Table of Contents 
          
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#tests)
  * [Questions](#questions)
      
      
## Installation
      
${data.install}
     

## Usage 
      
${data.usage}
      
      
## License

${data.license}

      
## Contributing
      
${data.contribute}

      
## Tests
      
${data.testing}


## Questions

Github: ${data.github}
      
If you have questions or would like to contact me about this project - 

Email: ${data.email}
      
      
---
`;
}
    
});

