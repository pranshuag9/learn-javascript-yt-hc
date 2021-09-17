var countries = ["India", "USA", "Japan", "Russia"]

var states = new Array("Delhi", "Rajasthan", "Mumbai", "Assam");

console.log(states);
console.log(states[0]);

console.log(states.length);

states[1] = "Punjab";

console.log(states);

var user = ["pranshu", "pranshu@example.com", 3, 34, true];

console.log(user);
var single = user.pop() // Remove value from end of array

console.log(single)

user.unshift("NEW VALUE"); // Insert value at front of array
console.log(user);

user.shift(); // Remove value from front of array
console.log(user);

console.log(user.indexOf(3)) // Get the index of a value in array
console.log(user.indexOf("new")) // Get the unknown value from array gives -1

console.log(Array.from("pranshu"))
