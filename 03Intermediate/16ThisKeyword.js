// For all regular function calls, this points to window obj or global context
console.log(this);
var user = {
    firstName: "Pranshu",
    courseCount: 4,
    getCourseCount: function(){
        console.log("LINE 7", this);
        function sayHello(){
            console.log("Hello");
            console.log("LINE 10", this);
        }
        sayHello();
        return this.courseCount;
    },
};
user.getCourseCount();
