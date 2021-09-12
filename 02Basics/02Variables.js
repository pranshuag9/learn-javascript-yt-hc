const uid = "abc123";

var fullName = "Pranshu Aggarwal"
var email = "pranshuaggarwal@example.com"
var pwd = "12345678"
var confirmedPassword = "12345678"
var courseCount = 8
var isLoggedInFromGoogle = false;

// fullName = prompt("Enter your name: ");

console.log("UID: " + uid);
console.log("Name: ", fullName);
console.log("Email: " + email);

console.log(`
    With Unique ID: ${uid},
    User is: ${fullName},
    and his Email is: ${email},
    and he uses the Password: ${pwd}.
`);