// // This represents the global context of JS.
// sayHello();
//
// function sayHello(){
//     console.log("hello");
// }

if (2 === "2"){
    console.log("This is true.")
}

var myName = "Pranshu"

if (myName === myName){
    console.log("This is a true statement");
}

// // This code will work in browser console, as there is context "window"
// // but not on running directly with node interpreter. Since the context here is
// // not the window. It is different
// if(myName === window.myName){
//     console.log("This is true statement");
// }