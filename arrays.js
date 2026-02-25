let fruits = ["apple", "banana", "orange"];
let vegetables = ["carrot", "broccoli", "spinach"];

// Concatenate two arrays
// so concate returns a new array and does not change the original arrays
// so we can also use the spread operator to concatenate two arrays
let spread_array = [...fruits, ...vegetables]
// push method can also be used to concatenate two arrays but it will change the original array
console.log(spread_array);
 // Output: ["apple", "banana", "orange", "carrot", "broccoli", "spinach"]

 // we can use flat method to concatenate two arrays but it will change the original array
let nested_array = [fruits, vegetables];
let flat_array = nested_array.flat();
console.log(flat_array); 
// Output: ["apple", "banana", "orange", "carrot", "broccoli", "spinach"]

// now method that can convert objects or string into arrays .from method
let newarray = Array.from("Hello");
console.log(newarray); 
// Output: ["H", "e", "l", "l", "o"]

let obj = {a: 1, b: 2, c: 3};
let obj_array = Array.from(Object.values(obj));
console.log(obj_array); 
// Output: [1, 2, 3]