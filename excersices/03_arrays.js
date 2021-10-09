console.log('*****Arrays Practice*****');
/* 3-a
Given the following array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
show by console, months 5 and 11 (use console.log)*/
var monthArr = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log('3-a) The months at positions 5 and 11 are:');
console.log(monthArr[5] + " " + monthArr[11]);
/* 3-b
Order alphabetically the month array and show it by console.(use sort).*/
var sortedMonthArr = monthArr.sort();

console.log('3-b) This is month array sorted alphabetically:')
console.log(sortedMonthArr);
/* 3-c
Add one element at the biggining and at the end of the array (use unshift and push).*/
var elementBefore = sortedMonthArr.unshift('Meses');
var elementAfter = sortedMonthArr.push(2021);

console.log('This is the result of exercise 3-c:');
console.log(sortedMonthArr);
/* 3-d
Remove the first element and the last one from the array (use shift and pop).*/
var quitFirstElem = sortedMonthArr.shift(0);
var quitLastElem = sortedMonthArr.pop();

console.log('This is the result of exercise 3-d:');
console.log(sortedMonthArr);
/* 3-e
invert the array order (use reverse).*/
var invertOrder = sortedMonthArr.reverse(0);

console.log('This is the result of exercise 3-e:');
console.log(invertOrder);
/* 3-f
Join all array elements in one string where a - separate each month (use join)..*/
var joinArray = sortedMonthArr.join('-');

console.log('This is the result of exercise 3-f:');
console.log(joinArray);