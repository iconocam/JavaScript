///////////////////////////////////////////////
// Console log and typeof
///////////////////////////////////////////////

console.log('Yoda said "cool, you are" ');
// typeof keyword
// console.log(typeof 3.14); //number
let leon = 'this is a sentence';
// console.log(typeof leon); // string

///////////////////////////////////////////////
// variable declarations and Scope
///////////////////////////////////////////////

// indentifier   name    assingment     value
var myVariable = 'Some value';
let mySecond = true;
const PI = 3.141592653589793;

// let statement
/**
 * Block Scoped
 * it can change values, can be reassigned
 */

// Example of Scope
//global scope
let x = 10;

// tinted windows, you can look out, but not in
{
  // different scope, block scope
  let x = 2;
  // console.log('block', x);
}

// Demo vars
// console.log('global', a);
var num = 1;
{
  var num = 10;
  // same variable
  // DONT USE VAR
}

// console.log(num); // 10

// const statement
//Block scope
const PI2 = 3.14159265;
// PI2 = 3.14 // This will give an error

///////////////////////////////////////////////
// Arithmetic Operators
///////////////////////////////////////////////

// +
// console.log(3 + 4); //7
// // -
// console.log(10 - 5); // 5
// // *
// console.log(5 * 5); // 25
// // /
// console.log(16 / 8); // 2
// // modulo %
// console.log(7 % 3); // 1

// console.log(10 % 2); // 0

let newNumber = 9;
// console.log(newNumber);
// newNumber = newNumber + 1
//++ or -- before the variable (++newNumber) returns the added value and reassigns the variable
// ++ or -- after the variable (newNumber++) returns the pre-add value and then reassigns the variable

let currentNumber = ++newNumber;

newNumber++;

///////////////////////////////////////////////
// Comparsion Operators
///////////////////////////////////////////////

// >
// console.log(3 > 4); //false
// // <
// console.log(5 < 10); // true
// // >=
// console.log(5 >= 5); // true
// // <=
// console.log(16 <= 8); // false
// // ==
// console.log(10 == 10); // true
// // 1=
// console.log(10 != 2); // true

// === strictly equals: checks value and datatype
// == loose equals: checks value

// && all expressions must evaluate to true
let andLogic = 3 > 2 && 6 == 6 && 4 < 8; // thisLogic is true
let andLogic2 = 3 > 2 && 6 == 7; // thisLogic is false

// ||
let orLogic = 3 > 2 || 6 == 6;
let orLogic2 = 3 > 4 || false;
// other use of the || OR
let userInput = 'Theusername';
let characterName = userInput || 'John Doe';

// ! bang
let bangLogic = !(3 > 2 || 6 == 6);
let bangLogic2 = 3 > 4 || false;

///////////////////////////////////////////////
// String Concatenation
///////////////////////////////////////////////
console.log('Hello ' + 'World');
console.log('This is' + ' a String ' + leon);
// 5 is type converted
console.log('The number is ' + 5);
// console.log('Hello' - ' World'); // Invalid: NaN

///////////////////////////////////////////////
// String Access
///////////////////////////////////////////////
const username = 'Inigo Montoya';
let index = 5;

console.log(username[index]);
console.log('hello world'[4]);

const frost =
' Nature\'s first green is gold, \n \
Her hardest hue to hold, \n \
Her early leaf\'s a flower, \n \
But only so an hour. \n \
Then leaf subsides to leaf \n \
So Eden sank to grief, \n \
So dawn goes down to day. \n \
Nothing gold can stay.';

console.log(frost);

console.log(
'They said, "this string doesn\'t need an escape," but that isn\'t true.'
);

///////////////////////////////////////////////
// Template Literals
///////////////////////////////////////////////
const frost2 = `Nature's first green is gold,
Her hardest hue to hold.
Her early leaf's a flower;
But only so an hour.
Then leaf subsides to leaf.
So Eden sank to grief,
So dawn goes down to day.
Nothing gold can stay.`;

console.log(frost2);

const a = 5;
const b = 10;

console.log(`a has the value$ of ${a}, and b is the value of ${b}
Therefore, a + b is equal to ${a + b}`);