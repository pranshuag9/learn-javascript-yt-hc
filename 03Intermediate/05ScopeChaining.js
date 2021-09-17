// Ice-cream story concept. Level1, 2, 3
var name = "Pranshu"

console.log("Line number 3:", name);

function sayName(){
    var name = "Mr. P";
    console.log("Line number 7:", name);

    sayNameTwo();
    function sayNameTwo(){
        var name = "My. PA"
        console.log("Line number 11:", name);
    }
}
sayName();
