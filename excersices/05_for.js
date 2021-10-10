console.log('*****For Practice*****');
/* 5-a
Create an array that contains 5 words and iterate it using javascript for to show and alert using each word. */

var animalsArr = ['lobo', 'leon', 'tigre', 'conejo', 'puma'];

// for(var i=0; i < animalsArr.length; i++) {
//     alert('My animal is: ' + animalsArr[i]);
// }

/* 5-b
To the array above convert the first letter of each word to UpperCase and show one alert for each modified word. */

for(var i=0; i < animalsArr.length; i++){
    alert('My animal is: ' + animalsArr[i].substring(0, 1).toUpperCase());
}
