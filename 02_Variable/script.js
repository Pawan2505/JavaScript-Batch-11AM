/* ---------------------------------------------
   Variable Naming Rules
   ---------------------------------------------
   In JavaScript, variable names must follow some rules.
   Let's understand these rules step-by-step with examples.
-------------------------------------------------*/

// Rule 1: Variable name should NOT start with a number

// This is wrong:
// let 123name = "wrong";   // Invalid – starts with a number

// This is correct:
let name123 = "correct"; // Starts with a letter – valid
console.log("Rule 1 - name123:", name123);

// Rule 2: Spaces are NOT allowed in variable names

// This is invalid:
// let first name = "invalid";  // Error – space not allowed

// Correct way is to use underscore (_) or camelCase
let first_name = "valid";
console.log("Rule 2 - first_name:", first_name);

// Rule 3: JavaScript keywords (like if, while, for) cannot be used as variable names

// These are invalid:
// let if = 5;         // Not allowed – 'if' is a keyword
// let while = "loop"; // Not allowed – 'while' is a keyword

// Rule 4: Only two special characters are allowed in variable names – underscore (_) and dollar sign ($)

let _num1 = 10; // Valid
let $name = "Pawan"; // Valid
console.log("Rule 4 - _num1:", _num1);
console.log("Rule 4 - $name:", $name);

// Rule 5: Variables can be short or long, but meaningful names are preferred

let x = 5; // Valid but not meaningful
let studentMarks = 95; // Good practice – clear and descriptive
let total_price_after_tax = 150.75; // Also good – shows purpose
console.log("Rule 5 - studentMarks:", studentMarks);
console.log("Rule 5 - total_price_after_tax:", total_price_after_tax);

// Rule 6: JavaScript is case-sensitive

let num = 10;
let Num = 20;

console.log("Rule 6 - num:", num); // Output: 10
console.log("Rule 6 - Num:", Num); // Output: 20
// These are two different variables because JS treats lowercase and uppercase as separate

// ---------------------------------------------
// let and Block Scope Example
// ---------------------------------------------

let x1 = 12;

{
  let x1 = 4; // This x1 is only inside this block
  console.log("Inside block x1:", x1); // Output: 4
}

console.log("Outside block x1:", x1); // Output: 12

/* 
Rules:
---------------------
1. Don't start variable names with a number.
2. Don't use spaces in variable names – use _ or camelCase.
3. Avoid using JavaScript reserved keywords as variable names.
4. Only _ and $ are allowed as special characters.
5. Use meaningful names so code is easy to understand.
6. JavaScript is case-sensitive – 'num' and 'Num' are different.
7. Prefer let and const over var for better scoping and safety.
*/
