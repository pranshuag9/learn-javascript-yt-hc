const pranshu = {
    firstName: "Pranshu",
    lastName: "Aggarwal",
    role: "Admin",
    courseCount: 3,
    getInfo: function(){
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses.
        `);
    },
};

const dj = {
    firstName: "Rock",
    lastName: "DJ",
    role: "Sub-Admin",
    courseCount: 4,
}

// pranshu.getInfo();
// dj.getInfo();

pranshu.getInfo.bind(dj)(); // bind always gives you a reference back like
// in closure, we get a reference of a function and we can call that reference.
