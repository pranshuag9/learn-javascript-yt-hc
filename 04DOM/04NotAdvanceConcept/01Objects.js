// Creating a function with firstName and courseCount properties and a
// getCourseCount method inside it. Now,'this' keyword points to the instance
// of this function when created.
var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count for ${this.firstName} is: ${this.courseCount}`);
    };
};

User.prototype.getFirstName = function () {
    console.log(`Your firstname is : ${this.firstName}`);
}

// Storing the Object from prototype function, with 'new' keyword.
// Calling it's constructor by passing the parameters to prototype function.
var pranshu = new User("pranshu", 2);
pranshu.getCourseCount();
if (pranshu.hasOwnProperty("firstName")) {
    pranshu.getFirstName();
}
// console.log(pranshu);

var sam = new User("sam", 1);
sam.getCourseCount();
if (sam.hasOwnProperty("firstName")) {
    sam.getFirstName();
}
// console.log(sam);

// For more info: Checkout MDN Docs on Objects
