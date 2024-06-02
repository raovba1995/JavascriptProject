//arrow functions

//Function Def using arrow
var add = (num1, num2) => num1+num2;
var square = (num) => num* num;
var Welcome = () => "Welcome to JS";
var greeting = (name) =>"HEllo " + name;
var power = (num1, num2) => Math.pow(num1, num2);

//Function call
console.log(add(5,6));
console.log(square(5));
console.log(Welcome());
console.log(greeting("Hema"));
console.log(power(5,2));