/*function saySomething(name) {
	name = prompt("What is your name?");
	alert('Good Morning ' + name + '!');
};

saySomething();

function subtract(number1, number2) {
	answer = number1 - number2;
  alert('the answer is ' + answer);
};

subtract(7,2);

function multiply(number1, number2) {
	answer = number1 * number2;
	alert('the answer is ' + answer);
};

multiply(5,2);

function threeTimes(number1, number2, number3) {
	answer = number1 * number2 * number3;
  alert('the answer is ' + answer);
};

threeTimes(5,2,2);

function divide(number1, number2) {
	answer = number1 / number2;
  alert('the result of the equation is ' + answer + '!');
};

divide(6,3);

function remainder(number1, number2) {
	answer = number1 % number2;
  alert('the result of the equation is ' + answer + '!');
};

remainder(10,4);

function sam() {
	var age = prompt('How old are you?');
  var name = prompt('What is your name?');
  var food = prompt('What is your favorite food?');
  alert('Your name is  ' + name + ', your age is ' + age + ', and your favorite food is ' + food + '.');
  };

sam();*/

var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

alert(add(number1, number2));

var subtract = function(number1, number2) {
  return number1 - number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

alert(subtract(number1, number2));

var multiply = function(number1, number2) {
  return number1 * number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

alert(multiply(number1, number2));

var divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

alert(divide(number1, number2));
