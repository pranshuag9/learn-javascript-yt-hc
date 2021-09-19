class User{
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}
	#courseList = []; // private property courseList
	getInfo(){
		return {name:this.name, email:this.email};
	}
	enrollCourse(name){
		this.#courseList.push(name);
	}
	getCourseList(){
		return this.#courseList
	}
	login(){
		return "You are logged in";
	}
}

class SubAdmin extends User{
	// constructor() { // constructor overloading is not possible in JS
	// 	super();
	// }
	constructor(name, email, ...restParams) {
		super(name, email);
	}
	getAdminInfo(){
		return "I am subadmin";
	}
	// login(){
	// 	return "SubAdmin logged in."
	// }
}

module.exports = User;

// const rock = new User("rock", "rock@rock.com");
// console.log(rock.getInfo());
// rock.enrollCourse("Angular Bootcamp");
// console.log(rock.getCourseList());
// console.log(rock.courseList);

const tom = new SubAdmin("tom", "tom@example.com");
console.log(tom.getAdminInfo());
// console.log(tom.login()); // static methods cannot be inherited.
console.log(tom.getInfo());
