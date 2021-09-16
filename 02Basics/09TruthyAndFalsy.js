// Falsy values ------------------------------------------------------
// undefined
// null
// 0
// ''
// NaN

var user;

if (user){
    console.log("Condition is true");
}
else{
    console.log(`User not found! ${user}`);
}

console.log(2 + "2");
console.log("2" + 2);

console.log("2" + "2");
console.log(2 + 2);

// Type Coercion -------------------------------------------------------
var two = "2"
if (2 == two){
    console.log(two + 2);
}

two = 2
if (2 === two){
    console.log(two + 2);
}