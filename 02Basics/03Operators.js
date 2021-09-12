var n1 = 6;
var n2 = 7;

console.log(`n1 = ${n1} and n2 = ${n2}\n`)

console.log("n1 + n2 =", n1 + n2);
console.log("n1 * n2 =", n1 * n2);
console.log("n2 / n1 =", n2 / n1);
console.log("n1 - n2 =", n1 - n2);
console.log("n1 % n2 =", n1 % n2);
console.log("n1 > n2? Answer =", n1 > n2);
console.log("n1 < n2? Answer =", n1 < n2);
console.log("n1 ** 2 =", n1 ** 2);
console.log("n2 ** 2 =", n2 ** 2);


let listingPrice = 799
let sellingPrice = 199
let discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100
displayDiscountPercentRounded = Math.round(discountPercent)
console.log(`
    Listing Price = ${listingPrice}
    Selling Price = ${sellingPrice}
    Discount = ${displayDiscountPercentRounded}%
`);
