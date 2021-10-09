console.log('*****Strings Practice*****');
/* 2-a
- Create a String type variable with at least 10 characters and convert all the text to uppercase. */
var text = 'Tomorrow will be a great day to eat hot pancackes!'

var toUpper = text.toUpperCase()
console.log('The result for excercise number 2-a is: ' + toUpper);

/* 2-b
- Create a String type variable with at least 10 characters and create a new string with the first 5 characters saving the result in a new variable (use substring) */
var first5Characters = text.substring(0, 5);

console.log('The result for excercise number 2-b is: ' + first5Characters);

/* 2-c
- Create a String type variable with at least 10 characters and create a new string with the last 3 characters saving the result in a new variable (use substring) */
var last3Characters = text.substring(text.length - 3);
console.log('The result for excercise number 2-c is: ' + last3Characters);

/* 2-d
- Create a String type variable with at least 10 characters and create a new string with the first letter in upperCase and the rest in lowercase (use substring, ToLowerCase, toUpperCase and the + operator)*/
var exampleText = 'it is really important to practice JavaScript at least an hour per day';

var firstUpperCase = exampleText.substring(0, 1).toUpperCase() + exampleText.substring(1, exampleText.length).toLowerCase();
console.log('The result for excercise number 2-d is: ' + firstUpperCase);

/* 2-e
- Create a String type variable with at least 10 characters and some blank space. FInd the first blank space position and save it in a variable. (use indexOf).*/

var blankSpace = exampleText.indexOf(" ");
console.log('The result for excercise number 2-e is: ' + blankSpace);






