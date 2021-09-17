function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
        case "subadmin":
            return `${name} is sub-admin with access to create and delete courses`
        case "testprep":
            return `${name} is test-prep with access to create and delete tests`
        case "user":
            return `${name} is a user to consume content`
        default:
            return `${name} is a trial user`
            break;
    }
}

console.log(getUserRole("Pranshu", "testprep"));

var get_user_role = function(name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
        case "subadmin":
            return `${name} is sub-admin with access to create and delete courses`
        case "testprep":
            return `${name} is test-prep with access to create and delete tests`
        case "user":
            return `${name} is a user to consume content`
        default:
            return `${name} is a trial user`
    }
}

var getRole = get_user_role("Pranshu", "admin");

console.log(getRole);
