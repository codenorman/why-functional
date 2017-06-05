const R = require('ramda'); // functional library

let shoppingCart = [
    {name: 'item 1', 'qty': 1, price: 1.0},
    {name: 'item 2', 'qty': 2, price: 2.00},
    {name: 'item 3', 'qty': 3, price: 3.00},
    {name: 'item 4', 'qty': 4, price: 4.00},
    {name: 'item 5', 'qty': 5, price: 5.00},
    {name: 'item 6', 'qty': 6, price: 6.00},
    {name: 'item 7', 'qty': 7, price: 7.00},
    {name: 'item 8', 'qty': 8, price: 8.00},
    {name: 'item 9', 'qty': 9, price: 9.00},
    {name: 'item 10', 'qty': 10, price: 10.00},
];

const calcExtendedPrice = (item) => R.prop('qty', item) * R.prop('price', item);
const calcTax = R.multiply(1.085);
const calcShipping = R.add (5);

let total = R.compose(
    calcShipping,
    calcTax,
    R.reduce(R.add, 0),
    R.map(calcExtendedPrice)
);

let result = total(shoppingCart);
console.log('total:', result);
