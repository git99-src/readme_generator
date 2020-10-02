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
        message: "What are the requirements to install the project?",
        name: "install",
      },
      {
        type: "input",
        message: "What are the instructions and examples for use of this project?",
        name: "usage",
      },
      {
        type: "list",
        message: "What type of license will this use?",
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
        message: "Please provide instructions here on how other develepers may contribute to this project.",
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
  // let badge
  switch (answers.license) {
    case "ISC":
      answers.license = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)" + " ISC License"
      break;
    case "MIT":
      answers.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" + " MIT License"
      break;
    case "Apache 2.0":
      answers.license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" + " Apache 2.0"
      break;
  }
  
  fs.writeFile("README.md", generateReadMe(answers), (err) => {
    console.log("success")
  })
    // // Project name in read me
    // console.log("Your name:", answers.name);
    // console.log("description:", answers.description);
    // console.log("install:", answers.install);
    // console.log("usage:", answers.usage);
    // console.log("answers:", answers.license);
    // console.log("contribute:", answers.contribute);
    // console.log("testing:", answers.testing);
    // console.log("github:", answers.github);
    // console.log("email:", answers.email);


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
      
If you have questions or would like to contact me about this project - 

Github: ${data.github}

Email: ${data.email}
      
      
---
`;
}
    

});

// GIVEN a command-line application that accepts user input

// WHEN I am prompted for information about my application repository
// THEN a quality, professional README.md is generated with the title of your
// project and sections entitled Description, Table of Contents, Installation,
// Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information,
// contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled
// Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a
// notice is added to the section of the README entitled License that explains
// which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link
// to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with
// instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents - format README.md#installation
// THEN I am taken to the corresponding section of the README

// const data = {
//   title: "hello world",
//   description: "the description",
//   install: "installation stuff here",
// }

// function generateReadMe(data) {
//   return `# ${data.title}

//   ## Description 

//   ${data.description}

//   ## Table of Contents (Optional)
  
//   If your README is very long, add a table of contents to make it easy for users to find what they need.
  
//   * [Installation](#installation)
//   * [Usage](#usage)
//   * [Credits](#credits)
//   * [License](#license)
  
  
//   ## Installation
  
//   ${data.install}
  
  
//   ## Usage 
  
//   Provide instructions and examples for use. Include screenshots as needed. 
  
  
//   ## Credits
  
//   List your collaborators, if any, with links to their GitHub profiles.
  
//   If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
//   If you followed tutorials, include links to those here as well.
  
  
  
//   ## License
  
//   The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)
  
  
//   ---
  
//   🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
//   ## Badges
  
//   ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  
//   Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  
//   ## Contributing
  
//   If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.
  
//   ## Tests
  
//   Go the extra mile and write tests for your application. Then provide examples on how to run them.
  
  
//   ---
// `;
// }


// fs.writeFile("README.md", generateReadMe(data), (err) => {
//   console.log("success")
// })

