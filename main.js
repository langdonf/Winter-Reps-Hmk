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


// ### E. Multiples of 3 and 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.  If a previous question you've done has helpful bits of code in it that partially solves this problem, look back at them.

// You just solved [Project Euler](https://projecteuler.net/problem=1) problem 1!  

// Are you having dejà vu? This just in! From the "Read the entire problem before you start" dept: This problem was on a previous assignment.  You may skip it **if you've already done it**, just include a comment saying that you've already done it. If you've now done the problem twice, perhaps next time you'll read the whole problem before starting it.


function euler(){
    total = 0
        for (let i = 0; i < 1000; i++) {
            if(i % 5 == 0){
                total += i;
            }else if (i % 3 == 0){
                total += i;
            }
    console.log(total);
}}

euler()

// ## III. Arrays & Control flow

// ### A. Talk about it:

// 1. What are the things in an array called?
'elements'
// 2. Do Arrays guarantee those things will be in order?
'no'
// 3. What real-life thing could you model with an array?
'grocery list'

// ### B. Easy Does It

// 1. Create an array that contains three quotes and store it in a variable called `quotes`.

var quotes = ["Rice is great if you're really hungry and want to eat two thousand of something.","The depressing thing about tennis is that no matter how good I get, I'll never be as good as a wall.","I find that ducks' opinion of me is very much influenced by whether or not I have bread."]

// ### C. Accessing elements

// Given the following array `const randomThings = [1, 10, "Hello", true]`
const randomThings = [1, 10, "Hello", true]
// 1. How do you access the 1st element in the array?
randomThings[0];
// 2. Change the value of `"Hello"` to `"World"`.
randomThings[2] = "World"
// 3. Check the value of the array to make sure it updated the array.  How?  Why, yes! `console.log()`;

console.log(randomThings);

// ### D. Change values

// Given the following array `const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]`
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// 1. What would you write to access the 3rd element of the array?
ourClass[2]
// 2. Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat"
// 3. Add a new element, "Cloud City" to the array.
ourClass.push("Cloud City")

console.log(ourClass);

// ### E. Mix It Up

// Given the following array: `const myArray = [5, 10, 500, 20]`
const myArray = [5, 10, 500, 20]
// 1. Add the string `"Egon"` to the end of the array. Add another string of your choice to the end of the array.
myArray.push('Egon')
myArray.push('Cat')
// 2. Remove the `5` from the beginning of the array.
// 3. Add the string `"Bob Marley"` to the beginning of the array.
myArray.splice(0,1)
// 4. Remove the string of your choise from the end of the array.
myArray.pop()
// 5. Reverse this array using `Array.prototype.reverse()`.  Did you mutate the array? What does _mutate_ mean? Did the `.reverse()` method return anything?
myArray.reverse()
'Yes, it reversed it'
console.log(myArray);

// ### F. Biggie Smalls

// Create a variable that contains an integer.
var integer = 7
// Write an `if ... else` statement that:
if(integer < 100){
    console.log("little number");
} else{
    console.log("big number");
}
// 1. `console.log()`s "little number" if the number is entered is less than **100**

// 2. `console.log()`s `big number` if the number is greater than or equal to 100.

// ### G. Monkey in the Middle

// Write an `if ... else if ... else` statement:

// 1. `console.log()` `little number` if the number entered is less than **5**.<br>
if(integer < 5){
    console.log("little number");
} else if(integer >10 ){
    console.log("big number");
}else{
    console.log("monkey");
}
// 2. If the number entered is more than 10, log `big number`.

// 3. Otherwise, log "monkey". <br>

// ### H. What's in Your Closet?

// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

//javascript
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

// // Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ],[
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ],[
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];


// 1. What's Kristyn wearing today? Using bracket notation to access items in `kristynsCloset`, log the sentence "Kristyn is rocking that " + *the third item in Kristyn's closet* + " today!" to the console.
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
// 2. Kristyn just bought some sweet shades! Add `"raybans"` to her closet **after `"yellow knit hat"`.**
kristynsCloset.splice(6,0,"raybans")
console.log(kristynsCloset);
// 3. Kristyn spilled coffee on her hat... modify this item to read `"stained knit hat"` instead of yellow.
kristynsCloset.splice(5,1,"stained knit hat")
console.log(kristynsCloset);
// 4. Put together an outfit for Thom! Using **bracket notation**, access the first element in Thom's `shirts` array.
console.log(thomsCloset[0][0]);
// 5. In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][0]);
// 6. Access one item from Thom's accessories array.
console.log(thomsCloset[2][0])
// 7. Log a sentence about what Thom's wearing. Example: `"Thom is looking fierce in a grey button-up, jeans and wool scarf!"`
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][0]}`);
// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to `Footie Pajamas`.
thomsCloset[1][2] = "Footie Pajamas"

// ### A. `printGreeting`

// Do you think you could write a function called `printGreeting` with a parameter `name` that returns a greeting with the argument **interpolated** into the greeting?

// Like so?

// ```javascript
// console.log(printGreeting("Slimer"));
// ```
// > `=> Hello there, Slimer!`

// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, **read entire problems carefully before doing them from now on**.  

"Check"

// ### B. `printCool`

// Write a function `printCool` that accepts one parameter, `name` as an argument. The function should print the name and a message saying that that person is cool.

// ```javascript
// console.log(printCool("Captain Reynolds"));
// ```

// > `=> "Captain Reynolds is cool";`

function printCool(name) {
    return `${name} is cool.`
}
console.log(printCool('Ironman'));

// ### C. `calculateCube`

// Write a function `calculateCube` that takes a single number and prints the volume of a cube made from that number.

// ```javascript
// console.log(calculateCube(5));
// ```

// > => 125



// ### D. `isVowel`

// Write a function `isVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

// ```javascript
// console.log(isVowel("a"));
// ```

// > `=> true`

// :red_circle: Commit.


// ### E. `getTwoLengths`

// Write a function `getTwoLengths` that accepts two parameters (strings). The function should return an _array_ of numbers where each number is the length of the corresponding string.

// ```javascript
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// ```
// > `=> [4, 13]`

// :red_circle: Commit.


// ### F. `getMultipleLengths`

// Write a function `getMultipleLengths` that accepts a single parameter as an argument: an **array** of **strings**. The function should return an array of **numbers** where each number is the length of the corresponding string.

// ```javascript
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// ```

// > `=> [5, 4, 2, 2, 4]`

// :red_circle: Commit.


// ### G. `maxOfThree`

// Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

// ```javascript
// console.log(maxOfThree(6, 9, 1));
// ```

// > => 9

// :red_circle: Commit.


// ### H. `printLongestWord`

// Write a function `printLongestWord` that accepts a single argument, an **array** of **strings**. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// ```javascript
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// ```

// > `=> "Peanutbutter"`

// :red_circle: Commit.


// ### I. `transmogrify`

// Write a Javascript function called `transmogrify`. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the
// power of 2` is 225.

// ```javascript
// console.log(transmogrify(5, 3, 2));
// ```
// > `=> 225`

// :red_circle: Commit.


// ### J. `reverseWordOrder` v2

// **Without using `.split()`, `.reverse()`, or `.join()`,** write a function `reverseWordOrder` that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation. 

// See if you can do it without googling.

// Remember: Jim showed you today that you can index directly into a string: 
// ```js
// "hello world"[6]
// ```
// > `=> "w"`

// That and basic loops and variables and arrays are all you need to solve this without the Array methods.

// ```javascript
// console.log(reverseWordOrder("Ishmael me Call"));
// ```
// > `=> "Call me Ishmael"`

// ```js
// console.log(reverseWordOrder("I use Lâncome on my comb"));
// ```
// > `=> "comb my on Lâncome use I"`

// :red_circle: Commit.

// ### K. Get down and dirty with `Math.random()`

// 1.  Write a function that will return a random integer between 1 and 10. Test it.
// 2.  Write a function that will return a random integer between 10 and 100. Test it.
// 3.  Write a function that will return a random number between 532 and 13267. Test it.
// 4.  Write a function that will return a random number between 1 and 10. Test it.
// 5.  Add a few more quotes to the quotes array from question III-B-1 above. Write a function that will take an array as a parameter, and return a random element from that array.  Call your function a few times, passing in the quotes array.  Give it a nice semantic name like `getRandomElement`.