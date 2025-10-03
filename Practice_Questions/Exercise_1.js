// Declare three variables using var, let, and const. Print their values to the console.

// Check the data type of null and undefined using typeof.

// Convert the string "25" into a number in two different ways.

// Compare "10" and 10 using both == and ===. Note the difference.

// Create a variable with your name and print it using template literals.


// Q1:
var a = 10;       // var → function-scoped
let b = 20;       // let → block-scoped
const c = 30;     // const → cannot be reassigned

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

// Q2:
console.log(typeof null);       // "object"  (special case/bug in JS)
console.log(typeof undefined);  // "undefined"

// Q3:
let str = "25";

// Method 1: Using Number()
let num1 = Number(str);

// Method 2: Using parseInt()
let num2 = parseInt(str);

console.log(num1); // 25
console.log(num2); // 25

// Q4:
console.log("10" == 10);  // true  → because == does type conversion
console.log("10" === 10); // false → because === checks both value + type
// Q5:

let name = "Hamza";
console.log(`Hello, my name is ${name}!`);
