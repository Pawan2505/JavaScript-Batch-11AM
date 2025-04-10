/*JavaScript has 8 Datatypes
String
Number
Bigint
Boolean
Undefined
Null
Symbol
Object*/

// datatype -> datatype keyword -> var , let, const

// username = "Utkarsh";

// console.log(username);

// var username = "Vraj";
// console.log(username);

// var username = "Raj";

// console.log(username);

// var -> it is not block scope variable & we create global varible with help of var keyword
// we can declared any variable multiple time with help of var
// security -> less than let and const variable

// {
//     var num = 10;
//     console.log(num)
// }

// {
//     var num = 10;
// }

// console.log(num);

// let : let keyword ->  varible we can re-insilatize -> multime

// let num1 = 100;

// console.log("Original data : ",num1);

// num1 = 200;

// console.log("updated data : ",num1)

// let x = 20;

// {
//     let x = 50;
//     console.log(x) // 50
// }

// console.log(x) //20

// local varible > globle variable

// let x = 20;

// {
//     let x = 50;
//     console.log(x) // 50
// }

// console.log(x) //20

// let y = 20;

// {
//    console.log(y);
// }

//  let z = 23;
// {
//     let z = 20;
//     // console.log(:: z); // not ok
// }

// let value;
// // let value = 29;  // not ok

// value = 20000;

// console.log(value)

// same variable we can not redeclared with other variable keyword.

// var x = 20;

// let x = 40;

// console.log(x);

// var, let

// const -> const type vaiable we can not re-declared and re-inisilation and also declare and assign in same line
//  const type variable -> block scope variable.

// const num = 20;

// console.log(num);

// const num;
// num = 40; //

// console.log(num);

// {
//     // blcok scope code
// }

// {
//   const num = 10;
//   console.log(num);
// }

// {
//   const num = 10;

// }

// console.log(num);  // not ok

// let y = 10;
// {
//     // let y = 20;
//     console.log(y);
// }

// user input

// let num = parseFloat(prompt("Enter Number : "));

// console.log(num);

// console.log(typeof num);

// let username = "Pawan Maurya";
// console.log(username)
// console.log(typeof username);

// let age = 25;
// console.log(age);
// console.log(typeof age);

// let isPresent = true;
// console.log(isPresent);
// console.log(typeof isPresent);

// let value = 5678990n;
// console.log(value);
// console.log(typeof value);

// let num2;
// console.log(num2);
// console.log(typeof num2);

// let data = null;
// console.log(data);
// console.log(typeof data);

// let s = Symbol(20);
// console.log(s);
// console.log(typeof s);

// let arr = [12, "Pawan", true];
// console.log(arr);
// console.log(typeof arr);



// let s = Symbol();
// s = 20;
// console.log(s);
// console.log(typeof(s));


// let value = parseInt(prompt())

// console.log(value)

// console.log(typeof value)