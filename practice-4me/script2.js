// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
!(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
(n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

const isDivisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0
console.log(isDivisibleBy5);

const firstLargerThanLast = (n1 > n4);

console.log(firstLargerThanLast)

const chain = ((n2 - n1) * n3 ) % n4 ;

console.log(chain)


// e = fuel efficiency t = trip end g = gallons 
// assuming the max gas we will let c = tank capacity

const t = 1500
const e = 55
const e2= 60
const e3= 75
const g = 30
const c = 60

//const successfulTrip = ((g * c) /= e ); 
// max distance * 
const endTrip = ( t >= ((g * c ) /e))
console.log("`is the distance we need to go greater than or equal to the \
max gallons that our tank could carry * how many miles per gallon divided by speed`")

console.log(endTrip)

// if true then 60 gallons is enough 

const b = 175
const fuel = 3
console.log("`is $175 for 3 per gallon enough when carrying 60 max gallons")
const isItEnough = (b>= 60 * 3);
console.log (isItEnough)

// if false then the budget is too low to cover gas

// distance/speed divide distance by the speed

const time= (t / e);
console.log("`1500 miles divided by fuel efficiency`");
console.log(time);

// it would take about 27 hours going at 55mph

//60mph
const endTrip2 = ( t >= ((g * c ) /e2))
console.log (endTrip2)
console.log("`is 1500 greater than or equal to gallons * max capacity divided by speed` ");

const isItEnough2 = (b>= 60 * 3);
console.log (isItEnough2);
console.log("`is 60 max gallons going at 60mph enough for 1500miles in distance?`");

//175 dollars is enough going at 60mph

const time2= (t /e2);
console.log(time2)
console.log("`how long would it take to go 1500miles at 60mph?`")

//it would take about 25 hours going at 60mph


const endTrip3 = ( t >= ((g * c ) /e3))
console.log(endTrip3)
console.log("`will going at 75mph allow me to travel 1500miles at 60max gallons?`")

const isItEnough3 = (b>= 60 * 3);
console.log(isItEnough3)
console.log("`is $175 enough to make it 1500 miles with 60max gallons at $3 per gallon?`");


//175 dollars is not enough going at 75mph

const time3 = (t /e3);
console.log(time3)
// the trip will take about 20 hours going at 75mph

console.log ("` Going at 55mph would be the most efficient way due to the fact that 175 is the minimum amount I could use \
even though it would take longer`")
console.log("`Going faster speeds will require more refuel money and \
we don't have it!!`")





