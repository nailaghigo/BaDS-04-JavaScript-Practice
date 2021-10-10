console.log('*****If-Else Practice*****');
/* 1-a
- Create a random number between 0 and 1 using Math.random(), if the value is more or equeal to 0,5, show an alert with the message “Greater than 0,5”, 
if not show an alert with the message “Lower than 0,5 */

// var randomNumber = Math.random(0, 1);

// if (randomNumber >= 0.5) {
//     alert(randomNumber + ' is greater than 0,5');
// } else {
//     alert(randomNumber + ' is lower than 0,5')
// }

/* 1-b
Create a variable named "age" that contains a number between 0 and 100 and show the following alert messages:
i) "Bebe" if the age is less than 2 years old;
ii) "Nino" if the age is between 2 and 12 years old;
iii) "Adolescente" between 13 and 19 years old;
iv) "Joven" between 20 and 30 years old;
v) "Adulto" between 31 and 60 years old;
vi) “Adulto mayor” between 61 and 75 years old;
vii) “Anciano” if it's more than 75 years old.*/

var age = 61;

// if (age > 0){
//     if(age < 2){
//         alert(age + ' = Bebe');
//     } else if (age >= 2 && age <= 12){
//         alert(age + ' = Nino');
//     } else if(age >= 13 && age <= 19){
//         alert(age + ' = Adolescente');
//     } else if(age >= 20 && age <= 30){
//         alert(age + ' = Joven');
//     } else if(age >= 31 && age <= 60){
//         alert(age + ' = Adulto');
//     } else if(age >= 61 && age <= 75){
//         alert(age + ' = Adulto mayor');
//     } else {
//         alert(age + ' = Anciano');
//     }
// } else {
//     alert('Error: age is not valid');
// }