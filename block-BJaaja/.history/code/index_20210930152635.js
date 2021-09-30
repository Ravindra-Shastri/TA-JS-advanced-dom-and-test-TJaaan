var num = 10;

var increaseNumber = () => num++;
var increasePassedNumber = (number) => number++;

var num1 = increaseNumber();
var num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);

