// ## I. Variables & Datatypes

// ### A. Q + A

// 1. How do we assign a value to a variable? 
var variable1 = 'value1'
console.log(variable1);
// 2. How do we change the value of a variable? 
var variable1 = 'value2'
console.log(variable1);
// 3. How do we assign an existing variable to a new variable?
var variable2 = variable1
console.log(variable2);
// 4. Remind me, what are `declare`, `assign`, and `define`?

'declare is to create a new variable name'

'assign is when you give it a variable'

'define is when you create a new variable and assign it a value '

// 5. What is pseudocoding and why should you do it?
'When you write out the solution to a problem by iusing english words instead of the language syntax. It helps you plan out what you are supposed to be doing without worring about that exact syntax to use.'

// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

'70/30?'

// ### B. Strings

// 1. Create a variable called `firstVariable`.
var firstVariable
//   - Assign it the value of the string `"Hello World"`
var firstVariable = 'Hello World'
//   - Change the value of this variable to some number.
firstVariable = 7
//   - Store the value of `firstVariable` in a new variable called `secondVariable` 
var secondVariable = firstVariable
//   - Change the value of `secondVariable` to any string. 
secondVariable = 'any string'
//   - What is the value of `firstVariable`?
7
// 2. Create a variable called `yourName` and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable `yourName` so that it returns a new string with them concatenated. 
var yourName = 'Langdon Froker'
console.log(`Hello, my name is ${yourName}`);
// >ex: `Hello, my name is Jean Valjean`

// ### C. Booleans
// - Using the provided variable definitions, replace the blanks so that all log statements print `true` in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print `true` to the console.

//js
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a > b);
console.log(c != d);
console.log('Name' === 'Name');
console.log(true || false);
console.log(false && false || false == false && false || false || true);
console.log(false == false)
console.log(e == 'Kevin');
console.log(a + b == c);
console.log(a * a == d);
console.log(48 == '48');
