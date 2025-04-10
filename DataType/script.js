/* -----------------------------------
   JavaScript Lecture: Data Types & Variables
   -----------------------------------*/

/* JavaScript has 8 primitive data types and 1 non-primitive:
   1. String
   2. Number
   3. BigInt
   4. Boolean
   5. Undefined
   6. Null
   7. Symbol
   8. Object (non-primitive)
*/

// -----------------------------------
// Variables in JavaScript
// -----------------------------------

// Using var:
// - Not block scoped (means it's globally accessible or function scoped)
// - Can be redeclared
// - Less secure in modern JavaScript

var username = "Vraj";
console.log(username);

var username = "Raj";
console.log(username);

// Even if var is inside a block, it's accessible outside
{
  var num = 10;
  console.log("Inside block using var:", num);
}
console.log("Outside block using var:", num); // Still accessible

// Using let:
// - Block scoped (only accessible inside the block)
// - Can be updated, but not redeclared in the same scope
// - More secure than var

let num1 = 100;
console.log("Original value (let):", num1);

num1 = 200; // Value updated
console.log("Updated value (let):", num1);

// let example with block scope
let x = 20;

{
  let x = 50; // This x is different, scoped to this block
  console.log("Block scope x:", x); // 50
}
console.log("Global scope x:", x); // 20

// let can't be redeclared in the same scope
// let value;
// let value = 29; // This will give an error

value = 20000;
console.log("Assigned later (let):", value);

// var and let with same variable name in same scope is not allowed
// var x = 20;
// let x = 40; // This will give an error

// Using const:
// - Also block scoped
// - Must be initialized at the time of declaration
// - Can't be updated or redeclared

const constNum = 20;
console.log("constNum:", constNum);

// const constNum;         // ❌ Not allowed without initialization
// constNum = 40;          // ❌ Can't assign new value

{
  const constVal = 10;
  console.log("Inside block (const):", constVal);
}

// Outside the block, constVal is not accessible
// console.log(constVal); // ❌ Error

// Another let example with block scope
let y = 10;
{
  // let y = 20; // New block variable (will work if uncommented)
  console.log("Access y inside block:", y);
}

// -----------------------------------
// Getting user input using prompt()
// -----------------------------------

// let num = parseFloat(prompt("Enter a number:"));
// console.log("You entered:", num);
// console.log("Type of input:", typeof num);

// -----------------------------------
// Checking Data Types using typeof
// -----------------------------------

let username2 = "Pawan Maurya";
console.log(username2, "-", typeof username2); // string

let age = 25;
console.log(age, "-", typeof age); // number

let isPresent = true;
console.log(isPresent, "-", typeof isPresent); // boolean

let bigNum = 5678990n;
console.log(bigNum, "-", typeof bigNum); // bigint

let notAssigned;
console.log(notAssigned, "-", typeof notAssigned); // undefined

let data = null;
console.log(data, "-", typeof data); // object (this is a known bug in JavaScript)

let s = Symbol(20);
console.log(s, "-", typeof s); // symbol

let arr = [12, "Pawan", true];
console.log(arr, "-", typeof arr); // object (arrays are also objects in JavaScript)

// Reassignment of symbol is not allowed as number
// s = 20; // ❌ Error
// console.log(s, typeof s);

// -----------------------------------
// Array iteration using forEach()
// -----------------------------------

let numbers = [12, 34, 56, 78];

numbers.forEach((item, index) => {
  console.log("Index:", index, "Value:", item);
});

/*
Important Points:
- var → function/global scoped, multiple declaration allowed
- let → block scoped, reassign allowed but no redeclaration
- const → block scoped, neither reassign nor redeclare
- Use typeof to check data types
- Arrays are also treated as objects
- prompt() ka use karke hum user se input le sakte hain
*/
