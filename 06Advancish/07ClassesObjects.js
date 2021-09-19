// import User from "./06Classes";

const User = require("./06Classes");

const pranshu = new User("pranshu", "pranshu@example.com");
pranshu.enrollCourse("React Bootcamp");
pranshu.enrollCourse("Angular Bootcamp");

console.log(pranshu.getInfo());

let courses = pranshu.getCourseList();

courses.forEach((course)=>{
	console.log(course);
})
