// Show user a signout button if he is authenticated,
// otherwise show him option to Login/Signup

var authenticated = true;

// if(authenticated){
//     console.log("Show signout button");
// }else{
//     console.log("Show login option");
// }

authenticated ? console.log("Signout button") : console.log("Login Button");

console.log(authenticated?"Signout Button":"Login Button");