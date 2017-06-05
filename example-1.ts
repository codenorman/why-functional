const R = require('ramda'); // functional library

let result;


// function
// function doubleJS (x) {
//     return x * 2;
// }
//
// // ES 2016 && typescript
// const double = x => x * 2;
// console.log ('double:', doubleJS(2), double(2));

// return
// *************

const isEven = (x) => x % 2 === 0;
const isOdd = (x) => !isEven(x);

let data = [1,2,3,4,5,6,7,8,9,10];
console.log('isOdd:', data.filter(isOdd));

// return
// *************

// COMPLEMENT
result = R.find(isEven, [1, 2, 3, 4]);
console.log('find:', result);

result = R.filter(isEven, [1, 2, 3, 4]);
console.log('filter: ', result);

// return
// *************

// BOTH / EITHER
const isAuthenticated = x => x.name === 'brian';
const isAuthorized = x => x.role === 'admin';

const isAllowed = R.both(isAuthenticated, isAuthorized);

result = isAllowed({name: 'brian', role: 'admin'});
console.log('both:', result);

// return
// *************


// COMPOSE - COMPOSITION
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
const power = (x, y) => x ** y;
const double = x => multiply(2, x);
const addOne = x => add(1, x);
const squared = x => power(x, 2);

const composeEx = R.compose(addOne, double, squared);
result = composeEx(2);
console.log('compose:', result);

// return
// *************


// Curry: Partially Apply Functions
//   A function that returns a function with first argument applied
//   and takes one less parameter
// Background: High-Order Functions - a function that returns a new function

const addC = R.curry((x, y) => x + y);

const add10 = addC(10);

console.log('add10 + 1:', add10(1));
console.log('add10 + 2:', add10(2));

// return
// *************

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
 // return
// *************


// Point Free

const fieldGreaterPF = R.compose(R.lt, R.prop('size'));

const fieldsLargerThanPF = R.compose(
        R.map(R.prop('name')),
        R.filter(fieldGreaterPF)
    );

result = fieldsLargerThan(20,  fields);
console.log('fieldsPF:', result);
