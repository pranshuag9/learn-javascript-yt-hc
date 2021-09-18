var testArray = [2, 4, 6, 3, 1, 5, 9, 8];

// To fill whole array with given value starting from 2nd index(incl.) and
// ending at 5th index(excl.). It's an inplace operation. Means value is
// permanently set to array even though we called the function in console.log()
console.log(testArray.fill("x", 2, 5));

// To fill whole array with given value starting from 2nd(incl.) index to end
console.log(testArray.fill("p", 3));

// To fill whole array with given value
console.log(testArray.fill("h"));
// -----------------------------------------------------------------------------

const myNumber = [23, 24, 25, 55, 66, 77, 87, 98]

// filter() elements from array, i.e., if condition meets, then get the element.
const result = myNumber.filter((num) => num < 55);

console.log(result);
// -----------------------------------------------------------------------------