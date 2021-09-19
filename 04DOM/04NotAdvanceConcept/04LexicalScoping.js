// function init() {
//     var firstName = "pranshu";
//     function sayFirstName(){
//         console.log(firstName);
//     }
//     sayFirstName();
// }
// init();

// Closure in JS
function init() {
    var firstName = "pranshu";
    function sayFirstName(){
        console.log(firstName);
    }
    return sayFirstName;
}
var value = init();

value();
