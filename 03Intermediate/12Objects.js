var user = {
    firstName: "Pranshu",
    lastName: "Aggarwal",
    email: "pranshu@example.com",
    age: 34,
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName){
        this.courseList.push(courseName)
    },
    getCourseCount: function(){
        return this.courseList.length;
    }
}
console.log(user.firstName);
console.log(
    `${user.firstName} is enrolled in total ${user.getCourseCount()} courses.`
)
user.buyCourse("Javascript Course");
user.buyCourse("ReactJS Course");
console.log(
    `${user.firstName} is enrolled in total ${user.getCourseCount()} courses.`
)