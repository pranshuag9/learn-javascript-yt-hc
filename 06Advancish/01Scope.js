if (true) {
	let lastName = "Aggarwal"; // let keyword declare variable in local context.
}
// console.log(lastName); // This gives error since lastName is not declared.

if (true) {
	var lastName = "Aggarwal"; // var keyword declare variable in global context
}
console.log(lastName); // So we can use the variable that is not declared
// outside if block, as if block can't scope var variables. but can scope let variables.
