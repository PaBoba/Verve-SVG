const fs = require("fs");
const inquirer = require("inquirer");
const { Shape, Triangle, Circle, Square } = require("./lib/shapes");

// prompt user for input to create logo
const userPrompt = [
  {
    type: "input",
    name: "text",
    message: "Enter text for logo:",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter color of text:",
  },
  {
    type: "list",
    name: "shape",
    message: "Select a shape:",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "stroke",
    message: "Enter color of outline:",
  },
  {
    type: "input",
    name: "fill",
    message: "Enter color of fill: ",
  },
];

// function to create logo based on user input
const createLogo = async (answers) => {
  const { text, textColor, shape, stroke, fill } = answers;

  let shapeObj;
  switch (shape) {
    case "circle":
      shapeObj = new Circle(98, fill, stroke);
      break;
    case "triangle":
      shapeObj = new Triangle(300, fill, stroke);
      break;
    case "square":
      shapeObj = new Square(200, fill, stroke);
      break;
    default:
      shapeObj = new Circle(300, fill, stroke);
  }

  // Get the SVG content from the shape object
  let svgContent = shapeObj.render();

  // Truncate text to 3 characters
  const truncatedText = text.slice(0, 3);

  // Calculate text position based on font size
  const fontSize = 75;
  const textX = 150 - 50; // Center of the SVG width
  const textY = 90 + fontSize / 2; // Center of the SVG height plus half of the font size

  // Add text element to the SVG
  svgContent += `<text x="${textX}" y="${textY}" fill="${textColor}" font-size="${fontSize}" text-anchor="middle">${truncatedText}</text>`;

  // Wrap the content with SVG tags and set width and height
  const finalSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${svgContent}</svg>`;

  // Save the SVG string to a file in the ./examples folder
  const outputPath = "./examples/logo.svg";
  fs.writeFileSync(outputPath, finalSvg);
  console.log(`SVG file created at ${outputPath}`);
};

// prompt the user and create logo
inquirer.prompt(userPrompt).then((answers) => {
  createLogo(answers);
});
