"use strict";
// learning about variables

let message;

message = 'Good morning to ya!'; // sets variable

alert(message); // returns variable as alert

// lets use prompt

let age;

age = prompt("How old are you?", 100);

alert(`You are ${age} years old`);

// if else stuff

let year = prompt('What year was the millenium?','');

if (year == 2000) {
  alert('You guessed right!');
} else {
  alert('No no no, try again');
  year = prompt('What year was the millenium?', '');
}

// magic of condition operator ?

let result = (year > 2000) ? alert('Not quite'): alert('too low');
