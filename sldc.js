// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Analysis of Requirements
// Design
// Implementation
// Maintain
// Planning
// Testing & Integration

let incorrectList = [
  "Analysis of Requirements",
  "Design",
  "Implementation",
  "Maintain",
  "Planning",
  "Testing & Integration",
];

let correctList = [
  incorrectList[4],
  incorrectList[0],
  incorrectList[1],
  incorrectList[2],
  incorrectList[5],
  incorrectList[3],
];
console.log(correctList);

// the above console.log outputs the following:
// [
//   "Planning",
//   "Analysis of Requirements",
//   "Design",
//   "Implementation",
//   "Testing & Integration",
//   "Maintain",
// ];

//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
    The first one is done for you. 
*/
const planning =
  "This is the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added.";
let analysisOfRequirements =
  "The second step is when the overarching needs necessary for the software product to be made is sketched out and reviewed. Still high view of the product, but coming donw to earth with evaluatind the needs. ";
let design =
  "Next is when the team gets the 'big picture' view of the code itself. Figuring out the necessary type of code and a rough idea about the code needed. Meant to be a bridge between Analysis and Implmentation.";
let implementation =
  "This is when the actual code for the project is written by the developers, following the prompts from the Planning, Analysis, and Design stages. Crux of the entire process. What happens before in the SDLC leads to this, and what happens after analyzes the code and its real world implementation.";
let testingAndIntegration =
  "In a perfect world, step 5 would always be handled by a Quality Assurance department, ensuring that the code works through various coding tests with the QA process.";
let maintain =
  "This step is the sixth and final step, it is debugging, cleaning, and maintaning the code product. Due to the nature of the step, coding, evolution of language, feedback from users, etc. this step doesn't have an end other than the discontinuation of the specific product. ";
