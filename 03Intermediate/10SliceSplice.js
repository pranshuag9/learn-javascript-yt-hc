var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"]

// slice() method is not inplace operation on Array. It doesn't change the
// array elements permanently.
console.log(`Array users sliced from 1 to 3 index: [${users.slice(1, 3)}]`);

console.log(users.slice(users.length - 1));
// -----------------------------------------------------------------------------

// splice() is an inplace operation on Array. That is, it permanently replaces
// the value from array. Splice operation removes the values from given index
// and replaces those with the values given in splice method.
// Note: First parameter is starting index, second parameter is count of values
// to replace.
users.splice(1, 3, "HI");
console.log(users);

users.splice(1, 1, ["Pranshu", "Aggarwal"]);
console.log(users);

users.splice(1, 2, "Pranshu", "Aggarwal");
console.log(users);
// -----------------------------------------------------------------------------
