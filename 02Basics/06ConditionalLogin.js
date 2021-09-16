// Allow user to access course if he is:
// logged in from email
// logged in from Google
// logged in from Facebook

var email = true;
var facebook = false;
var google = false;

if(email){
    console.log("Email is verified");
    if (facebook || google){
        console.log("Allow user to access course");
    }
}

if(email || facebook || google){
    console.log("Login successfull!");
}
