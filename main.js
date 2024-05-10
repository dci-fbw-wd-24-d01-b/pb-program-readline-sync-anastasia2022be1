import readlineSync from "readline-sync";

let userName = readlineSync.question('What is your name? ');
let yearBirthday = readlineSync.question('In which year were you born? ');
let cityBorn = readlineSync.question('In which city were you born? ');
let cityLive = readlineSync.question('Where do you live now? ');
let currentYear = readlineSync.question('What"s the current year? ');

yearBirthday = parseInt(Number(yearBirthday));
currentYear = parseInt(Number(currentYear));

userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
cityLive = cityLive[0].toUpperCase() + cityLive.slice(1).toUpperCase();
cityBorn = cityBorn[0].toUpperCase() + cityBorn.slice(1).toUpperCase();

console.log(`Hello! My name is ${userName}. I was born ${currentYear - yearBirthday} years ago in ${cityBorn}. Now I live in ${cityLive}.`)