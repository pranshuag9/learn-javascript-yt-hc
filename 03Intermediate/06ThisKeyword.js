// TODO: part 1 for this keyword
// The best way to find out what is inside global context is to printout
// 'this' keyword. This will give you lot of idea about the what the execution
// engine(V8 engine, browser engine) is holding up for you.

console.log(this)
// If this is empty scope, because are running this with node interpreter.
// But if we run this on browser console, then it will print a whole global
// context.

var game = "basketball";

function sayName(){
    var name = "Pranshu"
    console.log(this);
}
sayName();

// this keyword gives us access to global context. And global context differs
// in the situation. In the case of node, it gives me an empty scope, but in
// case of browser, it gives me a Window object.
