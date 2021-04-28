function addTwoNumbers(x, y) {
  return x + y;
}
var sum = addTwoNumbers(4, 4);
console.log('sum ' + sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var totalMinutes = convertHoursToMinutes(2);
console.log(totalMinutes);

function getGreeting(name) {
  return name;
}
var greeting = getGreeting('Hello World!');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var result = addAndMultiplyBy5(10, 5);
console.log(result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var answer = multiplyAndDivideBy5(35, 10);
console.log(answer);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var difference = subtractTwoNumbers(22, 7);
console.log(difference);

function getCircleCircumference(radius) {
  return 2 * 3.14159 * radius;
}
var circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('daniel', 'hong');
console.log(fullName);

function cube(number) {
  return number * number * number;
}
var thirdPower = cube(5);
console.log(thirdPower);
