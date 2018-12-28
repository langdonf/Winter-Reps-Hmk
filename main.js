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

// ### D. The farm

// 1. Declare a variable `animal`.  Set it to be either "cow" or something else.

var animal = 'cow'
// 2. Write code that will print out "mooooo" if the it is equal to `cow`.

if (animal == 'cow'){
    console.log('MOOOOO');
}
// 3. Change your code so that if the variable `animal` is anything other than a cow, it will print "Hey! You're not a cow."
if (animal == 'cow'){
    console.log('MOOOOO');
} else {
    console.log("Hey! You're not a cow.");
}
// 4. Commit.

// ### E. Driver's Ed

// 1. Make a variable that will hold a person's age. Be semantic.
var personAge = 17
// 2. Write code that will print out "Here are the keys", if the age is 16 years or older.
if (personAge >= 16){
    console.log("Here are the keys");
}
// 3. If the age is younger than 16, a message should print "Sorry, you're too young."
if (personAge >= 16){
    console.log("Here are the keys");
} else {
    console.log("Sorry, you're too young.");
}

// ## II. Loops

// Remember: **USE `let` when you initialize your for loops!**

// This is GOOD: `for(`**`let i = 0;`**` i < 100; i++)`

// This is NO GOOD: `for(i = 0; i < 100; i++)`

// ### A. The basics

// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive.
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
// 2. Write a loop that will print out all the numbers from 10 up to and including 400.

// for (let i = 10; i <= 400; i++) {
//     console.log(i);
// }

// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000.

// for (let i = 12; i <= 4000; i++) {
//     if (i % 3 == 0){
//     console.log(i);
//     }
// }

// ### B. Get even

// 1. Print out the even numbers that are within the range of 1 - 100.
for (let i = 1; i < 101; i++) {
    if(i % 2 == 0){
        console.log(i);
    } 
}
// 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number".
for (let i = 1; i < 101; i++) {
    if(i % 2 == 0){
        console.log(`${i} <-- is an even number`);
    } 
}

// ### C. Give me Five

// 1. For the numbers 0 - 100, print out "I found a `number`. High five!" if the number is a multiple of five.
for (let i = 0; i < 101; i++) {
    if(i % 5 == 0 && i != 0){
        console.log(`I found a ${i}. High five!`);
    } else if (i % 3 == 0 && i != 0){
        console.log((`I found a ${i}. Three is a crowd.`));
    } else {
        console.log(i);
    }

}
// >Example Output:
// ```
// I found a 5. High five!
// I found a 10. High five!
// ```

// 2. Add to the code from above to print out "I found a `number`. Three is a crowd" if the number is a multiple of three.

// >Example Output:
// ```
// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!
// ```

// ### D. Savings account

// 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called `bank_account`.

function bank_account(){
    var total = 0;
    for (let i = 0; i <= 10; i++) {
        total += i
    };
    console.log(total);
}
bank_account();

// >Check your work! Your banck_account should have $55 in it.

// 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

// >Check your work! Your banck_account should have $10,100 in it.

function bank_account2(){
    var total = 0;
    for (let i = 0; i <= 100; i++) {
        total += i * 2
    };
    console.log(total);
}
bank_account2();