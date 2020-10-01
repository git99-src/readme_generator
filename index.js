const fs = require("fs");
const inquirer = require("inquirer");


// Use the prompt method to ask the user a series of questions and get the user input.
inquirer
  .prompt([
    {
      // specifies what type of prompt to use
      type: "input",

      // The message displayed to the user
      message: "What is the name of the project?",

      // give inquirer a property to use for storing the user's answer in the
      // response object
      name: "name",
    },
    {
        // specifies what type of prompt to use
        type: "input",
  
        // The message displayed to the user
        message: "Please provide a description of the project?",
  
        // give inquirer a property to use for storing the user's answer in the
        // response object
        name: "description",
      },
      {
        // specifies what type of prompt to use
        type: "input",
  
        // The message displayed to the user
        message: "What are the requirements to install the project?",
  
        // give inquirer a property to use for storing the user's answer in the
        // response object
        name: "install",
      },
      {
        // specifies what type of prompt to use
        type: "input",
  
        // The message displayed to the user
        message: "How is this project to be used?",
  
        // give inquirer a property to use for storing the user's answer in the
        // response object
        name: "usage",
      },

      // LICENSE LIST HERE
      {
        type: "list",
        message: "What type of license will this use?",
        name: "license",
        choices: [
          "ISC",
          "MIT",
          "Apache",
          "None"
        ],
      },

      {
        // specifies what type of prompt to use
        type: "input",
  
        // The message displayed to the user
        message: "What are the guidelines for a use who wishes to contribute to this project?",
  
        // give inquirer a property to use for storing the user's answer in the
        // response object
        name: "contribute",
      },
      {
        // specifies what type of prompt to use
        type: "input",
  
        // The message displayed to the user
        message: "What is the testing methodology for this project?",
  
        // give inquirer a property to use for storing the user's answer in the
        // response object
        name: "testing",
      },


      {
        // specifies what type of prompt to use
        type: "input",
  
        // The message displayed to the user
        message: "What is your Github username?",
  
        // give inquirer a property to use for storing the user's answer in the
        // response object
        name: "github",
      },

      {
        // specifies what type of prompt to use
        type: "input",
  
        // The message displayed to the user
        message: "What is your email address?",
  
        // give inquirer a property to use for storing the user's answer in the
        // response object
        name: "email",
      },

])

.then(function (answers) {
    // Project name in read me
    console.log("Your name:", answers.name);
    console.log("description:", answers.description);
    console.log("install:", answers.install);
    console.log("usage:", answers.usage);
    console.log("answers:", answers.license);
    console.log("contribute:", answers.contribute);
    console.log("testing:", answers.testing);
    console.log("github:", answers.github);
    console.log("email:", answers.email);

    // The answer to the "movies" question is an array because the
    // the question has "checkbox" type.
    // console.log("Movies:", answers.movies.join(", "));

    // console.log("Shape:", answers.shape);
  });
