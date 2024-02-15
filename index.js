const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");

// inquirer prompt to get user input
const userPrompt = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter text for logo: ",
      // check for text input
      validate: (input) => TextValidator.validateTextCase(input),
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter color of text: ",
      // check for text color input in hex or color name
    },
    {
      type: "list",
      name: "shape",
      message: "Select a shape:",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "outline",
      message: "Enter color of outline: ",
      // check for outline color input in hex or color name
      validate: (input) => ColorValidator.validateColor(input),
    },
    {
      type: "input",
      name: "fill",
      message: "Enter color of fill: ",
      // check for fill color input in hex or color name
      validate: (input) => ColorValidator.validateColor(input),
    },
  ]);
};
