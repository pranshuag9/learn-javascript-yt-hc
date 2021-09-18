// Normal Function -------------------------------------------------------------
function isEven(num) {
    // if (element % 2 === 0) {
    //     return true;
    // }
    // return false;
    return num % 2 === 0;
}

console.log(`3 is Even number? -> ${isEven(3)}`);
// -----------------------------------------------------------------------------

// Arrow Function --------------------------------------------------------------
var isOdd = (num) => {
    return num % 2 === 1
}
console.log(`3 is Odd number? -> ${isOdd(3)}`)
// -----------------------------------------------------------------------------
const arr = [2, 4, 6, 8]
var result = arr.every(isEven)
console.log(`Every number in ${arr} is Even number? -> ${result}`)
// -----------------------------------------------------------------------------
result = arr.every((e) => (e % 2 === 1));
console.log(`Every number in ${arr} is Odd number? -> ${result}`);
// -----------------------------------------------------------------------------