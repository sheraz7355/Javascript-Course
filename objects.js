// now we have to use the symbol to create a unique identifier for the object properties
let id = Symbol("id");
// one thing to be notice that i declare symbol give it the id key 
// and give it to id symbol means i have id in id because when i console.log the id symbol it will return the symbol with the description of id
// but when i use the id symbol as a key in the object it will not return the symbol with the description of id but it will return the value of the id symbol which is 12345



let data = {
    name: "Shazib-Ali",
    id: 12345,
    age: 25,
    city: "Karachi"
}
console.log(data); 