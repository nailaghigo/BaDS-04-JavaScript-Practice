console.log('*****Functions Practice*****');
/* 6-a
Create a sum function that receives two number values and return the result. 
Execute the function and save the result in a variable, showing the value of that variable in browser console.*/

// var priceOne = 'hola';
// var priceTwo = 4;

// function totalPrice (a, b) {
//     return a + b;
// }

// var totalResult = totalPrice(priceOne, priceTwo);
// console.log('This is the result of exercise 6-a: ' + totalResult);

/* 6-b
To the previous sum function, add a validation to control if any of the parameters is not a number, 
show an alert clarifying that one of the parameters has an error and return the NaN value as a result*/

// var priceOne = 'hola';
// var priceTwo = 4;

// function totalPrice (a, b) {
//     if (typeof a === 'number' && typeof b === 'number'){
//         return a + b;
//     } else {
//         alert('One of the paramethers has an error')
//         if(typeof a !== 'number') {
//             return a;
//         } else {
//             return b;
//         }
//     }
// }

// var totalResult = totalPrice(priceOne, priceTwo);
// console.log('This is the result of exercise 6-b: ' + totalResult)

/* 6-c
Create a validate integer function that takes a number as a parameter and returns true if it is an integer.*/

// function validateInteger(value) {
//     return Number.isInteger(value);
// }

// var value = 1.3;
// console.log('This is the result of exercise 6-c, is "' + value + '" an Integer?: ' + validateInteger(value));

/* 6-d
To the sum function of exercise 6b) add a call that validates if the numbers are integers. 
In case of any decimals, show an alert with the error and return the number converted to integer (rounded). */

// var priceOne = 5.3;
// var priceTwo = 4.3;

// function totalPrice (a, b) {
//     if (validateInteger(a) && typeof a === 'number' && validateInteger(b) && typeof b === 'number'){
//         return a + b;
//     } else {
//         if(!validateInteger(a)) {
//             alert(a + ': this value is not an integer');
//             return Math.round(a);
//         } else {
//             alert(b + ': this value is not an integer');
//             return Math.round(b);
//         }
//     }
// }

// var totalResult = totalPrice(priceOne, priceTwo);

/* 6-e
Convert Validation in exercise 6b) in a separate function and call it inside the sum function checking that all function like before. */

function validateNumber(value) {
    return typeof value === 'number';
}

var priceOne = 22;
var priceTwo = 4;

function totalPrice (a, b) {
    if (validateNumber(a) && validateNumber(b)){
        return a + b;
    } else {
        alert('One of the paramethers has an error')
        if(validateNumber(a)) {
            return a;
        } else {
            return b;
        }
    }
}

var totalResult = totalPrice(priceOne, priceTwo);
console.log('This is the result of exercise 6-e: ' + totalResult)