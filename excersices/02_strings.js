console.log('*****Strings Practice*****');
/* 2-a
- Create a String type variable with at least 10 characters and convert all the text to uppercase. */
var text = "Tomorrow will be a great day to eat hot pancackes!"

var toUpper = text.toUpperCase()
console.log('The result for excercise number 2-a is ' + toUpper);

/* 2-b
- Create a String type variable with at least 10 characters and create a new string with the first 5 characters saving the result in a new variable (use substring) */
var first5Characters = text.substring(0, 5);

console.log('The result for excercise number 2-a is ' + first5Characters);