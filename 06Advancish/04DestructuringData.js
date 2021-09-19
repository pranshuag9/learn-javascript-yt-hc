// const user = ["pranshu", 3, "admin"];
// // var role = user[2];
// // var name = user[0];
//
// var [name, courseCount, role] = user;
//
// console.log(role);

const MyUser = {
	name: "Pranshu",
	courseCount: 5,
	role: "admin",
};
console.log(MyUser.courseCount);

const {name, myCourseCount, role} = MyUser;

console.log(name);
console.log(myCourseCount); // prints undefined because destructuring should of
// objects should be done with exact same names.
console.log(role);
