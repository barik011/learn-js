function getUserRole(name,role){
    switch (role) {
        case "superadmin":
            return `Hi ${name} you have full access for your account`;
            //break;
        case "admin":
            return `Hi ${name} you have access for edit,update and delete your account`;
            //break;
        case "subadmin":
            return `Hi ${name} you have access for edit and update your account`;
            //break;
    
        default:
            return `Hi ${name} you have access for trail user`;
            //break;
    }
}

var getRole = getUserRole("Barique","superadmin");

console.log(getRole);