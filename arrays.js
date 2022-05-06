//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ["red", "green", "black"];

//CODE HERE
let colorCopy = faveColors.slice(-faveColors.length);

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE
colorCopy.push("beige");

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5];

//CODE HERE

// the code below will change the original array "numbers"
let middleNums = numbers.splice(1, numbers.length - 2);
// the code below will NOT change the original array "numbers"
let middleNums2 = numbers.slice(1, numbers.length - 1);

//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352];

// CODE HERE

let answers = [];

for (let i = 0; i < bigOrSmallArray.length; i++) {
  //  I start with less than or equal to 100 because there are more numbers less than or equal to it than more than.
  if (bigOrSmallArray[i] <= 100) {
    answers.push("small");
  } else if (bigOrSmallArray[i] > 100) {
    answers.push("big");
  }
}
