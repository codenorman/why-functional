const R = require('ramda'); // functional library

let result;

// function
// function doubleJS (x) {
//     return x * 2;
// }

// ES 2016 && typescript
// const double = x => x * 2;


// forEach
// map
// filter/reject
// find
// reduce


const isEven = (x) => x % 2 === 0;
const isOdd = (x) => !isEven(x);

// COMPLEMENT
result = R.find(isEven, [1, 2, 3, 4]);
console.log('find:', result);

result = R.filter(isEven, [1, 2, 3, 4]);
console.log('filter: ', result);

// BOTH / EITHER
const isAuthenticated = x => x.name === 'brian';
const isAuthorized = x => x.role === 'admin';


const isAllowed = R.both(isAuthenticated, isAuthorized);

result = isAllowed({name: 'brian', role: 'admin'});
console.log('both:', result);


// COMPOSITION
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
const power = (x, y) => x ** y;
const double = x => multiply(2, x);
const addOne = x => add(1, x);
const squared = x => power(x, 2);

// PIPE
// const pipeEx = R.pipe(squared, double, addOne)
//
// let result = pipeEx(2);
// console.log (result);

// COMPOSE
const composeEx = R.compose(addOne, double, squared);
result = composeEx(2);
console.log('compose:', result);


// Curry: Partially Apply Functions
//   A function that returns a function with first argument applied
//   and takes one less parameter
// Background: High-Order Functions - a function that returns a new function

const addC = R.curry((x, y) => x + y);

const add10 = addC(10);
console.log('add10 + 1:', add10(1));
console.log('add10 + 2:', add10(2));


let fields = [
    {name: 'north 40', size: 40},
    {name: 'south 40', size: 40},
    {name: 'backyard', size: 10},
    {name: 'large backyard', size: 30},
    {name: 'farmer john', size: 120},
];

const fieldGreater = R.curry((size, field) => field.size > size);

const fieldsLargerThan =  (size, fields) =>
    R.compose(
        R.map(field => field.name),
        R.filter(fieldGreater(size))
    )(fields);


result = fieldsLargerThan(20, fields);
console.log('fields:', result);


// Imperative vs Declarative
// imperative tell the computer how to do it
// if-then-else statements
// loops
// arithmetic operators (+, -, *, /)
// comparison operators (===, >, <, etc.)
// logical operators (&&, ||, !)

// declarative
// tell the computer what to do and it figures out how to do it
// functional is a subset of imperative programming


// Point Free

const fieldGreaterPF = R.compose(R.lt, R.prop('size'));

const fieldsLargerThanPF = R.compose(
        R.map(R.prop('name')),
        R.filter(fieldGreater)
    );


result = fieldsLargerThan(20,  fields);
console.log('fieldsPF:', result);


//
// sum = (x, y) => {
//    return x + y;
// }
//
// // console.log (sum(1,2));
//
// let result = R.reduce (sum, 0, R.map(double , R.filter( isOdd, [1,2,3] )));
// console.log ('Composition Reduce', result);