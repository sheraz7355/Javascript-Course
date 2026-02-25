// anonymous functions 
// function expressions
// function declarations
// arrow functions
// first anonymous function
const add = function (a, b) {
    return a + b;
};
console.log(add(2, 3)); // Output: 5

// second anonymous function
const multiply = function (a, b) {
    return a * b;
};
console.log(multiply(4, 5)); // Output: 20

// arrow function
const subtract = (a, b) => a - b;
console.log(subtract(10, 4)); // Output: 6

// function declaration
function divide(a, b) {
    if (b === 0) {
        return 'Cannot divide by zero';
    }
    return a / b;
}
console.log(divide(20, 4)); // Output: 5
console.log(divide(20, 0)); // Output: Cannot divide by zero    

// iife (Immediately Invoked Function Expression)
(function () {
    console.log("This is an IIFE");
})(); // Output: This is an IIFE