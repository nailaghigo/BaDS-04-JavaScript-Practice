console.log('%c*****Arrays Practice*****', 'color:green');
/* 3-a
Given the following array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
show by console, months 5 and 11 (use console.log)*/

var monthArr = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var monthArrCopy = Object.assign([], monthArr);

console.log('3-a) The months at positions 5 and 11 are:');
console.log(monthArr[5] + " " + monthArr[11]);

/* 3-b
Order alphabetically the month array and show it by console.(use sort).*/

console.log('3-b) This is month array sorted alphabetically:')
console.log(monthArr.sort());

/* 3-c
Add one element at the biggining and at the end of the array (use unshift and push).*/

monthArr.unshift('Meses');
monthArr.push(2021);

console.log('This is the result of exercise 3-c:');
console.log(monthArr);

/* 3-d
Remove the first element and the last one from the array (use shift and pop).*/

monthArr.shift(0);
monthArr.pop();

console.log('This is the result of exercise 3-d:');
console.log(monthArr);

/* 3-e
invert the array order (use reverse).*/

monthArr.reverse(0);

console.log('This is the result of exercise 3-e:');
console.log(monthArr);

/* 3-f
Join all array elements in one string where a - separate each month (use join)..*/

console.log('This is the result of exercise 3-f:');
console.log(monthArr.join('-'));

/* 3-g
create a month array copy that contains from may to november (use slice).*/

console.log('This is the result of exercise 3-g:');
console.log(monthArrCopy.slice(4, 11))