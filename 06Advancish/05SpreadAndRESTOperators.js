// Spread Operator and REST Operator is ...args depending upon the condition.

var returnedValue = Math.max(2, 5, 7, 4, 2, 8);
console.log(returnedValue);

var myObj = {}

Object.assign(myObj, {a: 1, b: 2, c: 3}, {z: 9, y: 8, x: 7});
console.log(myObj);


function sumOne(a, b) {
	return a + b;
}

var myArr = [5, 4];

// console.log(sumOne(...myArr)); // This is SPREAD operator.

// REST Operator used inside function paramter.
function sumTwo(a, b, ...args) {
	let result = 0;
	result = a * b;
	// for(const i of args) result += i;
	args.forEach((i) => result += i);
	return result;
}

console.log(sumTwo(1, 2, 3, 4, 5));
