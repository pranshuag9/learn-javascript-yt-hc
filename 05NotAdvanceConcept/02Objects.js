var User = {
    name: "",
    getUserName: function () {
        console.log(`User name is : ${this.name}`);
    },
};

var pranshu = Object.create(User);
console.log(pranshu);
pranshu.name = "Pranshu Aggarwal";
pranshu.getUserName();


var sam = Object.create(User, {
    name: {value: "Sammy"},
    courseCount: {value: 3},
})
sam.getUserName();