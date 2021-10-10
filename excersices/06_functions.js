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
//     if (!isNaN(a) && !isNaN(b)){
//         return a + b;
//     } else {
//         alert('One of the paramethers has an error')
//         if(isNaN(a)) {
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

function validateInteger(value) {
    return Number.isInteger(value);
}

var value = 'Hola';
console.log('This is the result of exercise 6-c, is "' + value + '" an Integer?: ' + validateInteger(value));
