console.log('*****Arrays Practice*****');
/* 3-a
Given the following array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
show by console, months 5 and 11 (use console.log)*/
var monthArr = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('3-a) The month at the array position 5 is: ' + monthArr[5] + ', and the 11 position is: ' + monthArr[11]);

/* 3-b
Order alphabetically the month array and show it by console.(use sort).*/
var sortedMonthArr = monthArr.sort();

console.log('3-b) This is month array sorted alphabetically: ' + sortedMonthArr);

/* 3-c
Add one element at the biggining and at the end of the array (use unshift and push).*/
var elementBefore = sortedMonthArr.unshift('Meses');
var elementAfter = sortedMonthArr.push(2021);

console.log('This is the result of exercise 3-c: ' + sortedMonthArr);