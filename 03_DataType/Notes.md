👨‍🏫 Data Types & Variables
--------------------------------------------

✍️ JavaScript supports 8 primitive data types:

1. String        -> e.g.  "Hello", 'JS'
2. Number        -> e.g.  10, 3.14, -7
3. BigInt        -> e.g.  12345678901234567890n
4. Boolean       -> true / false
5. Undefined     -> declared but not assigned
6. Null          -> special empty value
7. Symbol        -> unique & immutable value
8. Object        -> Arrays, Functions, etc. (non-primitive)

--------------------------------------------

Variable Declaration Keywords

1. var
2. let
3. const

--------------------------------------------

🔹 var
- Function/Global Scoped
- Redeclaration allowed
- Poor security – avoid if possible

Example:

   var name = "Utkarsh";
   var name = "Raj";     // OK
   console.log(name);    // Raj

   {
     var a = 10;
   }

   console.log(a);       // 10 (accessible outside block)

--------------------------------------------

🔹 let
- Block Scoped ({} ke andar hi kaam karta hai)
- Reassignment allowed
- Redeclaration NOT allowed in same scope

Example:

   let age = 25;
   age = 30;             // ✅ allowed
   let age = 40;         // ❌ not allowed in same block

   {
     let age = 50;
     console.log(age);   // 50
   }

   console.log(age);     // 30

--------------------------------------------

🔹 const
- Block Scoped
- Must assign value at declaration
- Reassignment ❌
- Redeclaration ❌

Example:

   const PI = 3.14;
   PI = 3.1415;          // ❌ error

   const PI;             // ❌ not allowed

   {
     const roll = 101;
     console.log(roll);
   }

   console.log(roll);    // ❌ error (block scoped)

--------------------------------------------

📥 User Input using prompt()

   let n = parseInt(prompt("Enter number:"));
   console.log(n);
   console.log(typeof n);

--------------------------------------------

📌 typeof Operator

   let name = "Pawan";
   typeof name     // "string"

   let age = 25;
   typeof age      // "number"

   let isHere = true;
   typeof isHere   // "boolean"

   let big = 1234567890n;
   typeof big      // "bigint"

   let x;
   typeof x        // "undefined"

   let y = null;
   typeof y        // "object" (bug in JS)

   let sym = Symbol("id");
   typeof sym      // "symbol"

   let arr = [1, 2, "three"];
   typeof arr      // "object"

--------------------------------------------

🔁 Array forEach loop

   let nums = [10, 20, 30];

   nums.forEach((val, index) => {
     console.log(index, val);
   });

--------------------------------------------

📝 Important Note:

- Use `let` for most variables
- Use `const` for constants (non-changeable values)
- Avoid `var` unless required for legacy code
- Always check data type using `typeof`
- Arrays and objects are non-primitive types
- Use `prompt()` to take user input from browser

--------------------------------------------

