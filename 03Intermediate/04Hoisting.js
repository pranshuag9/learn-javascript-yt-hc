// Global Context -> Execution Context -> Execution Context -> Execution Context
// It works like a memory stack. global sits at the base, and scans all the
// functions in the start. Then all the variables are scanned and set to
// undefined value. Then the execution context starts to make processes to run.

tipper("3");

function tipper(amount){
    var bill = parseInt(amount)
    console.log(bill + 5);
}

bigTipper("200");

function bigTipper(amount){
    var bill = parseInt(amount);
    console.log(bill + 15);
}


// // This variable declared function will throw error since variables are
// // made available as undefined when scanned after function scanning.
// moreBiggerTipper("5");
var moreBiggerTipper = function(amount){
    var bill = parseInt(amount);
    console.log(bill + 100);
}
moreBiggerTipper("5");

// -----------------------------------------------------------------------------
console.log(name);
var name = "Pranshu";

function sayName(){
    console.log(`1. Inside sayName name: ${name}`)
    var name = "Mr. H";
    console.log(`2. Inside sayName name: ${name}`)
}
sayName()

console.log(`Outside After sayName name: ${name}`)
// -----------------------------------------------------------------------------
